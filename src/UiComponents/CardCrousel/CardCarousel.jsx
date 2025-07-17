/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

export const CardCarousel = ({
  images,
  autoplayDelay = 2000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Create a much larger infinite array for seamless looping
  const extendedImages = []
  const multiplier = 10 // Create 10 copies for smooth infinite scroll
  for (let i = 0; i < multiplier; i++) {
    extendedImages.push(...images)
  }

  const startIndex = Math.floor(extendedImages.length / 2) // Start from middle
  const totalImages = extendedImages.length

  useEffect(() => {
    setCurrentIndex(startIndex)
  }, [startIndex])

  useEffect(() => {
    if (!isAutoPlaying || autoplayDelay <= 0 || isTransitioning) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1
        
        // Check if we need to reset position (but do it seamlessly)
        if (nextIndex >= totalImages - images.length) {
          // Reset to early position after a brief moment
          setTimeout(() => {
            setIsTransitioning(true)
            setCurrentIndex(images.length)
            setTimeout(() => setIsTransitioning(false), 50)
          }, 100)
        }
        
        return nextIndex
      })
    }, autoplayDelay)

    return () => clearInterval(interval)
  }, [isAutoPlaying, autoplayDelay, totalImages, images.length, isTransitioning])

  const nextSlide = () => {
    if (isTransitioning) return
    
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1
      
      if (nextIndex >= totalImages - images.length) {
        setTimeout(() => {
          setIsTransitioning(true)
          setCurrentIndex(images.length)
          setTimeout(() => setIsTransitioning(false), 50)
        }, 100)
      }
      
      return nextIndex
    })
  }

  const prevSlide = () => {
    if (isTransitioning) return
    
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1
      
      if (prevIndex < images.length) {
        setTimeout(() => {
          setIsTransitioning(true)
          setCurrentIndex(totalImages - images.length - 1)
          setTimeout(() => setIsTransitioning(false), 50)
        }, 100)
      }
      
      return prevIndex
    })
  }

  const handleDragStart = (event) => {
    setIsAutoPlaying(false)
  }

  const handleDragEnd = (event, info) => {
    const threshold = 50
    const dragDistance = info.offset.x

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }
    
    setTimeout(() => setIsAutoPlaying(true), 1000)
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  const getSlideStyle = (index) => {
    const diff = index - currentIndex
    const absDistance = Math.abs(diff)
    
    // 🔥 SPACING CONTROL PARAMETER - Change this value to adjust spacing between images
    const imageSpacing = 248 // Default was 200, increased to 220 for minimal spacing
    
    // Show 5 images total (center + 2 on each side)
    if (absDistance > 2) {
      return {
        x: diff * imageSpacing,
        scale: 0,
        rotateY: diff * 15,
        zIndex: 0,
        opacity: 0,
      }
    }
    
    // Calculate position and scale based on distance from center
    let x = diff * imageSpacing // 🔥 SPACING APPLIED HERE
    let scale, opacity, zIndex, rotateY
    
    if (index === currentIndex) {
      // Center image - fully visible
      scale = 1
      opacity = 1
      zIndex = 10
      rotateY = 0
    } else if (absDistance === 1) {
      // Adjacent images - slightly smaller and faded
      scale = 0.8
      opacity = 0.7
      zIndex = 8
      rotateY = diff * 20
    } else if (absDistance === 2) {
      // Outer images - more faded shadow effect
      scale = 0.6
      opacity = 0.4
      zIndex = 6
      rotateY = diff * 30
    }

    return {
      x,
      scale,
      rotateY,
      zIndex,
      opacity,
    }
  }

  return (
    <div 
      className="relative w-full h-120 overflow-hidden flex items-center justify-center bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      {extendedImages.map((image, index) => {
        const slideStyle = getSlideStyle(index)
        
        return (
          <motion.div
            key={`${image.src}-${index}`}
            className="absolute cursor-grab active:cursor-grabbing"
            style={{
              transformStyle: "preserve-3d",
            }}
            animate={slideStyle}
            transition={isTransitioning ? { duration: 0 } : {
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            whileDrag={{ scale: 0.95 }}
          >
            <div className="w-64 h-90 md:w-82 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-900">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-300"
                draggable={false}
              />
              {/* Fade overlay for shadow effect */}
              <div 
                className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-300"
                style={{ 
                  opacity: slideStyle.opacity < 1 ? (1 - slideStyle.opacity) * 0.3 : 0 
                }}
              />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}