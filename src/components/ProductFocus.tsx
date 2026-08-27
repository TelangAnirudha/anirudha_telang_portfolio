import React, { useEffect, useRef, useState } from 'react';
import { Bot, Boxes, Building2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';

export const ProductFocus: React.FC = () => {
  /*
   * ============================================================
   * PHILOSOPHY TYPEWRITER STATE
   * ============================================================
   */
  const [displayedQuote, setDisplayedQuote] = useState('');
  const [quoteStarted, setQuoteStarted] = useState(false);

  const quoteRef = useRef<HTMLDivElement>(null);

  /*
   * ============================================================
   * 3D CAROUSEL STATE
   * ============================================================
   */
  const [rotation, setRotation] = useState(0);
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const rotationRef = useRef(0);
  const dragStartX = useRef(0);
  const dragStartRotation = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  /*
   * ============================================================
   * KEEP ROTATION REF IN SYNC
   * ============================================================
   */
  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  /*
   * ============================================================
   * PHILOSOPHY — START TYPEWRITER WHEN VISIBLE
   * ============================================================
   */
  useEffect(() => {
    const element = quoteRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setQuoteStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /*
   * ============================================================
   * PHILOSOPHY — TYPEWRITER ANIMATION
   * ============================================================
   */
  useEffect(() => {
    if (!quoteStarted) return;

    const quote = portfolioData.approachQuote;

    let index = 0;

    setDisplayedQuote('');

    const interval = window.setInterval(() => {
      index += 1;

      setDisplayedQuote(
        quote.slice(0, index)
      );

      if (index >= quote.length) {
        window.clearInterval(interval);
      }
    }, 28);

    return () => {
      window.clearInterval(interval);
    };
  }, [quoteStarted]);

  /*
   * ============================================================
   * AUTO ROTATION
   *
   * Slow continuous movement.
   * Stops while hovering or dragging.
   * ============================================================
   */
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (!isHoveringCarousel && !isDragging) {
        const movement = delta * 0.01;

        rotationRef.current -= movement;

        setRotation(rotationRef.current);
      }

      animationFrameRef.current =
        requestAnimationFrame(animate);
    };

    animationFrameRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHoveringCarousel, isDragging]);

  /*
   * ============================================================
   * MOUSE / TOUCH WHEEL ROTATION
   * ============================================================
   */
  const handleWheel = (
    event: React.WheelEvent<HTMLDivElement>
  ) => {
    event.preventDefault();

    const movement = event.deltaY * 0.32;

    rotationRef.current -= movement;

    setRotation(rotationRef.current);
  };

  /*
   * ============================================================
   * POINTER DRAG
   * ============================================================
   */
  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    setIsDragging(true);

    dragStartX.current = event.clientX;
    dragStartRotation.current = rotationRef.current;

    event.currentTarget.setPointerCapture(
      event.pointerId
    );
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;

    const distance =
      event.clientX - dragStartX.current;

    const nextRotation =
      dragStartRotation.current +
      distance * 0.45;

    rotationRef.current = nextRotation;

    setRotation(nextRotation);
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    setIsDragging(false);

    try {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    } catch {
      // Pointer capture may already be released.
    }
  };

  /*
   * ============================================================
   * ICON SYSTEM
   * ============================================================
   */
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return (
          <Building2 className="w-6 h-6 text-[#4A7860]" />
        );

      case 'Bot':
        return (
          <Bot className="w-6 h-6 text-[#4A7860]" />
        );

      case 'Boxes':
        return (
          <Boxes className="w-6 h-6 text-[#4A7860]" />
        );

      default:
        return (
          <Sparkles className="w-6 h-6 text-[#4A7860]" />
        );
    }
  };

  const quoteComplete =
    displayedQuote.length ===
    portfolioData.approachQuote.length;

  return (
    <section
      id="focus"
      aria-label="What I'm Building & Focus"
      className="
        py-24
        px-6
        sm:px-12
        lg:px-20
        max-w-7xl
        mx-auto
        space-y-16
        border-t
        border-[#2A2A22]
      "
    >

      {/* ========================================================
          SECTION HEADER
      ======================================================== */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-end
          justify-between
          border-b
          border-[#2A2A22]
          pb-6
          gap-4
        "
      >
        <div className="space-y-2">

          <div
            className="
              font-mono
              text-xs
              uppercase
              tracking-widest
              text-[#4A7860]
              flex
              items-center
              gap-2
            "
          >
            <span>PILLARS // 02</span>

            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-[#4A7860]
              "
            />

            <span className="text-[#8C887F]">
              WHAT I'M BUILDING & CURRENT FOCUS
            </span>
          </div>

          <h2
            className="
              font-display
              font-semibold
              text-3xl
              sm:text-4xl
              lg:text-5xl
              text-[#FAF8F5]
              tracking-tight
            "
          >
            Product Vision & Focus
          </h2>
        </div>

        <div
          className="
            font-mono
            text-xs
            text-[#8C887F]
          "
        >
          PRODUCT × AI × DATA × AEC
        </div>
      </div>


      {/* ========================================================
          PHILOSOPHY — TYPEWRITER
      ======================================================== */}
      <motion.div
        ref={quoteRef}
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          border-y
          border-[#2A2A22]
          py-8
          sm:py-12
          overflow-hidden
        "
      >

        {/* Top animated accent */}
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: '140px',
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            top-0
            left-0
            h-px
            bg-[#4A7860]
          "
        />

        {/* Label */}
        <motion.div
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: quoteStarted ? 1 : 0,
            y: quoteStarted ? 0 : 8,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            font-mono
            text-[11px]
            text-[#8C887F]
            uppercase
            tracking-[0.2em]
            flex
            items-center
            gap-3
            mb-6
          "
        >
          <span>
            PHILOSOPHY
          </span>

          <span className="text-[#4A7860]">
            / RULE 01
          </span>
        </motion.div>

        {/* Typed quote */}
        <div className="max-w-5xl">

          <blockquote
            className="
              font-display
              text-2xl
              sm:text-3xl
              lg:text-4xl
              xl:text-[42px]
              text-[#FAF8F5]
              font-medium
              leading-[1.18]
              tracking-tight
            "
          >
            <span>
              "
              {displayedQuote}
            </span>

            {/* Typing cursor */}
            {quoteStarted && (
              <motion.span
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 0.75,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  inline-block
                  ml-1
                  text-[#4A7860]
                  font-normal
                "
              >
                ▌
              </motion.span>
            )}

            {/* Closing quote only after typing finishes */}
            {quoteComplete && (
              <span>
                "
              </span>
            )}
          </blockquote>
        </div>

        {/* Supporting metadata */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: quoteComplete ? 1 : 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-6
            font-mono
            text-[10px]
            sm:text-xs
            text-[#8C887F]
            uppercase
            tracking-wider
          "
        >
          PRODUCT THINKING → TECHNICAL DEPTH → USEFUL OUTCOMES
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: quoteComplete
              ? '100%'
              : '0%',
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            bottom-0
            left-0
            h-px
            bg-[#4A7860]/35
          "
        />
      </motion.div>


      {/* ========================================================
          CORE FOCUS PILLARS
      ======================================================== */}
      <div className="space-y-8">

        {/* Heading */}
        <div
          className="
            flex
            items-end
            justify-between
          "
        >
          <div>

            <div
              className="
                font-mono
                text-xs
                text-[#4A7860]
                uppercase
                tracking-[0.18em]
              "
            >
              CORE FOCUS PILLARS
            </div>

            <div
              className="
                font-sans
                text-sm
                text-[#8C887F]
                font-light
                mt-2
              "
            >
              Where product strategy meets intelligent systems.
            </div>

          </div>

          <div
            className="
              hidden
              sm:block
              font-mono
              text-[10px]
              text-[#8C887F]
            "
          >
            03 SYSTEMS
          </div>
        </div>


        {/* ======================================================
            3D ROTATING PRESENTATION
        ====================================================== */}
        <div
          className="
            relative
            w-full
            h-[610px]
            sm:h-[650px]
            lg:h-[680px]
            overflow-hidden
            select-none
            cursor-grab
            active:cursor-grabbing
          "
          style={{
            perspective: '1800px',
            touchAction: 'pan-y',
          }}
          onMouseEnter={() =>
            setIsHoveringCarousel(true)
          }
          onMouseLeave={() =>
            setIsHoveringCarousel(false)
          }
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >

          {/* ====================================================
              AMBIENT BACKGROUND
          ==================================================== */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[500px]
              h-[500px]
              rounded-full
              bg-[#4A7860]/[0.035]
              blur-3xl
              pointer-events-none
            "
          />

          {/* Horizontal light field */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[90%]
              h-px
              bg-[#4A7860]/10
              pointer-events-none
            "
          />


          {/* ====================================================
              FLOOR / ELLIPTICAL ORBIT
          ==================================================== */}
          <motion.div
            animate={{
              rotate: rotation * 0.12,
            }}
            transition={{
              duration: 0,
            }}
            className="
              absolute
              left-1/2
              bottom-12
              -translate-x-1/2
              w-[380px]
              sm:w-[520px]
              lg:w-[650px]
              h-[90px]
              rounded-[50%]
              border
              border-[#4A7860]/20
              pointer-events-none
            "
          />

          <div
            className="
              absolute
              left-1/2
              bottom-[54px]
              -translate-x-1/2
              w-[250px]
              sm:w-[380px]
              lg:w-[480px]
              h-[50px]
              rounded-[50%]
              bg-[#4A7860]/[0.045]
              blur-xl
              pointer-events-none
            "
          />


          {/* ====================================================
              3D CAROUSEL
          ==================================================== */}
          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              w-[310px]
              sm:w-[350px]
              lg:w-[390px]
              h-[500px]
              sm:h-[530px]
              lg:h-[550px]
            "
            style={{
              marginLeft: '-155px',
              marginTop: '-265px',
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateY: rotation,
            }}
            transition={{
              duration: 0,
            }}
          >

            {portfolioData.whatImBuilding.map(
              (item, idx) => {

                /*
                 * Slightly wider radius than the previous version.
                 *
                 * This keeps the cards visually separated
                 * without making the geometry look like a
                 * literal triangular prism.
                 */
                const faceRotation =
                  idx * 120;

                return (
                  <motion.div
                    key={idx}
                    className="
                      absolute
                      inset-0
                    "
                    style={{
                      transform: `
                        rotateY(${faceRotation}deg)
                        translateZ(210px)
                      `,
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                    }}
                  >

                    {/* =================================================
                        DEPTH SHADOW
                    ================================================= */}
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-2xl
                        bg-[#0B0B08]
                        border
                        border-[#1E1E19]
                      "
                      style={{
                        transform:
                          'translateZ(-14px)',
                      }}
                    />

                    {/* =================================================
                        CARD
                    ================================================= */}
                    <div
                      className="
                        relative
                        w-full
                        h-full
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[#2A2A22]
                        bg-[#191913]
                        shadow-2xl
                      "
                    >

                      {/* =================================================
                          GRID
                      ================================================= */}
                      <div
                        className="
                          absolute
                          inset-0
                          opacity-[0.045]
                          pointer-events-none
                        "
                        style={{
                          backgroundImage: `
                            linear-gradient(
                              #FAF8F5 1px,
                              transparent 1px
                            ),
                            linear-gradient(
                              90deg,
                              #FAF8F5 1px,
                              transparent 1px
                            )
                          `,
                          backgroundSize:
                            '28px 28px',
                        }}
                      />

                      {/* =================================================
                          SOFT RADIAL LIGHT
                      ================================================= */}
                      <motion.div
                        className="
                          absolute
                          -top-32
                          -right-32
                          w-72
                          h-72
                          rounded-full
                          bg-[#4A7860]/10
                          blur-3xl
                          pointer-events-none
                        "
                        animate={{
                          scale: [
                            1,
                            1.12,
                            1,
                          ],
                          opacity: [
                            0.2,
                            0.38,
                            0.2,
                          ],
                        }}
                        transition={{
                          duration:
                            5 + idx,
                          repeat: Infinity,
                          ease:
                            'easeInOut',
                        }}
                      />

                      {/* =================================================
                          CARD CONTENT
                      ================================================= */}
                      <div
                        className="
                          relative
                          z-10
                          h-full
                          p-6
                          sm:p-7
                          flex
                          flex-col
                          justify-between
                        "
                      >

                        {/* =================================================
                            TOP CONTENT
                        ================================================= */}
                        <div className="space-y-7">

                          {/* Icon / Number */}
                          <div
                            className="
                              flex
                              items-start
                              justify-between
                            "
                          >

                            {/* Icon */}
                            <div
                              className="
                                relative
                                w-14
                                h-14
                                rounded-xl
                                bg-[#22221B]
                                border
                                border-[#2A2A22]
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <div
                                className="
                                  absolute
                                  inset-0
                                  rounded-xl
                                  bg-[#4A7860]/5
                                "
                              />

                              <div
                                className="
                                  relative
                                  z-10
                                "
                              >
                                {getIcon(
                                  item.icon
                                )}
                              </div>
                            </div>

                            {/* Number */}
                            <div
                              className="
                                font-display
                                text-3xl
                                font-semibold
                                text-[#4A7860]/60
                              "
                            >
                              0{idx + 1}
                            </div>

                          </div>


                          {/* =================================================
                              TITLE / DESCRIPTION
                          ================================================= */}
                          <div className="space-y-4">

                            <h3
                              className="
                                font-display
                                font-semibold
                                text-2xl
                                sm:text-3xl
                                text-[#FAF8F5]
                                tracking-tight
                              "
                            >
                              {item.title}
                            </h3>

                            <motion.div
                              animate={{
                                width: [
                                  '42px',
                                  '58px',
                                  '42px',
                                ],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease:
                                  'easeInOut',
                              }}
                              className="
                                h-px
                                bg-[#4A7860]
                              "
                            />

                            <p
                              className="
                                font-sans
                                text-sm
                                text-[#8C887F]
                                font-light
                                leading-relaxed
                              "
                            >
                              {item.description}
                            </p>

                          </div>
                        </div>


                        {/* =================================================
                            CAPABILITY SIGNALS
                        ================================================= */}
                        <div
                          className="
                            pt-6
                            mt-8
                            border-t
                            border-[#2A2A22]
                          "
                        >

                          <div
                            className="
                              font-mono
                              text-[10px]
                              text-[#8C887F]
                              uppercase
                              tracking-wider
                              mb-4
                            "
                          >
                            CAPABILITY SIGNALS
                          </div>

                          <div className="space-y-2.5">

                            {item.highlights.map(
                              (
                                highlight,
                                hIdx
                              ) => (
                                <motion.div
                                  key={hIdx}
                                  initial={{
                                    opacity: 0.75,
                                  }}
                                  whileHover={{
                                    x: 5,
                                    opacity: 1,
                                  }}
                                  transition={{
                                    duration:
                                      0.2,
                                  }}
                                  className="
                                    flex
                                    items-start
                                    gap-3
                                    font-mono
                                    text-[10px]
                                    sm:text-[11px]
                                    text-[#D8D4CA]
                                  "
                                >

                                  <span
                                    className="
                                      relative
                                      mt-[5px]
                                      flex
                                      h-1.5
                                      w-1.5
                                      shrink-0
                                    "
                                  >
                                    <span
                                      className="
                                        absolute
                                        h-full
                                        w-full
                                        rounded-full
                                        bg-[#4A7860]/30
                                      "
                                    />

                                    <span
                                      className="
                                        relative
                                        h-1.5
                                        w-1.5
                                        rounded-full
                                        bg-[#4A7860]
                                      "
                                    />
                                  </span>

                                  <span
                                    className="
                                      leading-relaxed
                                    "
                                  >
                                    {highlight}
                                  </span>

                                </motion.div>
                              )
                            )}

                          </div>
                        </div>

                      </div>


                      {/* =================================================
                          CARD BOTTOM EDGE
                      ================================================= */}
                      <div
                        className="
                          absolute
                          bottom-0
                          left-0
                          right-0
                          h-px
                          bg-[#4A7860]/40
                        "
                      />

                    </div>
                  </motion.div>
                );
              }
            )}
          </motion.div>


          {/* ====================================================
              ROTATION CONTROL / STATUS
          ==================================================== */}
          <div
            className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2
              flex
              flex-col
              items-center
              gap-2
              pointer-events-none
            "
          >

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  w-10
                  h-px
                  bg-[#2A2A22]
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  text-[#8C887F]
                  uppercase
                  tracking-[0.2em]
                "
              >
                {isDragging
                  ? 'DRAG TO ROTATE'
                  : 'SCROLL TO ROTATE'}
              </span>

              <span
                className="
                  w-10
                  h-px
                  bg-[#2A2A22]
                "
              />
            </div>

            {/* Position dots */}
            <div
              className="
                flex
                items-center
                gap-1.5
              "
            >
              {portfolioData.whatImBuilding.map(
                (_, idx) => (
                  <span
                    key={idx}
                    className="
                      w-1
                      h-1
                      rounded-full
                      bg-[#2A2A22]
                    "
                  />
                )
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};