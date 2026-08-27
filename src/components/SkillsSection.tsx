import React, { useMemo, useState } from 'react';
import {
  Bot,
  BarChart3,
  Building2,
  Cpu,
  Code2,
  Database,
  Sparkles,
  Terminal,
  Network,
  Cloud,
  Workflow,
  Search,
  BrainCircuit,
  Layers3,
  ShieldCheck,
  LineChart,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData';


/* =========================================================
   TECHNOLOGY LOGOS
========================================================= */

const techLogos: Record<string, string> = {
  Python:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',

  NumPy:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',

  Pandas:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',

  'Scikit-Learn':
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',

  Matplotlib:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg',

  SciPy:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scipy/scipy-original.svg',

  TensorFlow:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',

  PyTorch:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',

  XGBoost:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xgboost/xgboost-original.svg',

  'Hugging Face':
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/huggingface/huggingface-original.svg',

  LangChain:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/langchain/langchain-original.svg',

  PostgreSQL:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',

  MySQL:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',

  Docker:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',

  'Git & Version Control':
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',

  GitHub:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',

  'VS Code':
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',

  TypeScript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',

  JavaScript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',

  Java:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',

  'Node.js':
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',

  React:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
};


/* =========================================================
   FALLBACK ICONS
========================================================= */

const getFallbackIcon = (name: string) => {
  const iconClass = 'w-4 h-4 text-[#4A7860]';

  if (
    name.includes('API') ||
    name.includes('Integration')
  ) {
    return <Network className={iconClass} />;
  }

  if (
    name.includes('Database') ||
    name.includes('SQL') ||
    name.includes('Data')
  ) {
    return <Database className={iconClass} />;
  }

  if (
    name.includes('AI') ||
    name.includes('LLM') ||
    name.includes('Agent')
  ) {
    return <BrainCircuit className={iconClass} />;
  }

  if (
    name.includes('Analytics') ||
    name.includes('Visualization') ||
    name.includes('Business Intelligence')
  ) {
    return <BarChart3 className={iconClass} />;
  }

  if (name.includes('Cloud')) {
    return <Cloud className={iconClass} />;
  }

  if (name.includes('System')) {
    return <Cpu className={iconClass} />;
  }

  if (
    name.includes('Deployment') ||
    name.includes('CI/CD') ||
    name.includes('Automation')
  ) {
    return <Workflow className={iconClass} />;
  }

  if (
    name.includes('RAG') ||
    name.includes('Retrieval') ||
    name.includes('Search')
  ) {
    return <Search className={iconClass} />;
  }

  if (
    name.includes('Vector') ||
    name.includes('Embedding')
  ) {
    return <Layers3 className={iconClass} />;
  }

  if (
    name.includes('Security') ||
    name.includes('SSO')
  ) {
    return <ShieldCheck className={iconClass} />;
  }

  if (
    name.includes('Forecast') ||
    name.includes('Predictive')
  ) {
    return <LineChart className={iconClass} />;
  }

  return <Code2 className={iconClass} />;
};


/* =========================================================
   TECHNOLOGY MARK
========================================================= */

const TechnologyMark: React.FC<{
  name: string;
}> = ({ name }) => {
  const logo = techLogos[name];

  if (logo) {
    return (
      <div
        className="
          w-7 h-7
          rounded-md
          bg-[#181812]
          border border-[#2A2A22]
          flex items-center justify-center
          shrink-0
        "
      >
        <img
          src={logo}
          alt=""
          loading="lazy"
          className="w-4 h-4 object-contain"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="
        w-7 h-7
        rounded-md
        bg-[#181812]
        border border-[#2A2A22]
        flex items-center justify-center
        shrink-0
      "
    >
      {getFallbackIcon(name)}
    </div>
  );
};


/* =========================================================
   DOMAIN CONFIGURATION
=========================================================

   EDIT SCORES HERE.

   Domain scores:
   AEC                  95%
   AI / ML              80%
   DATA                 90%
   PRODUCT              80%

   Individual topic scores are independently configurable.
========================================================= */

const DOMAIN_PROFILES = [
  {
    id: 'aec',
    number: '01',
    title: 'AEC',
    fullTitle: 'AEC & Construction Technology',
    score: 95,
    icon: Building2,

    description:
      'Deep domain expertise across construction intelligence, project controls, risk, documentation and delivery systems.',

    topics: [
      {
        label: 'Construction Intelligence',
        score: 95,
      },
      {
        label: 'Project Controls & Scheduling',
        score: 95,
      },
      {
        label: 'Risk & Delay Prediction',
        score: 95,
      },
      {
        label: 'Document Intelligence',
        score: 95,
      },
      {
        label: 'Site & Project Analytics',
        score: 95,
      },
      {
        label: 'AI-assisted Decision Making',
        score: 95,
      },
    ],
  },

  {
    id: 'ai',
    number: '02',
    title: 'AI / ML',
    fullTitle: 'AI & Machine Learning',
    score: 80,

    icon: Sparkles,

    description:
      'Building depth across machine learning, generative AI, retrieval systems and agentic architectures.',

    topics: [
      {
        label: 'Machine Learning & Deep Learning',
        score: 80,
      },
      {
        label: 'Generative AI & LLM Applications',
        score: 80,
      },
      {
        label: 'Retrieval-Augmented Generation',
        score: 80,
      },
      {
        label: 'Vector Databases & Embeddings',
        score: 80,
      },
      {
        label: 'AI Agents & Multi-Agent Systems',
        score: 80,
      },
      {
        label: 'Agentic Workflows & Tool Calling',
        score: 80,
      },
    ],
  },

  {
    id: 'data',
    number: '03',
    title: 'DATA',
    fullTitle: 'Data & Analytics',
    score: 90,

    icon: BarChart3,

    description:
      'Strong analytical foundation spanning data products, BI, forecasting, engineering and decision systems.',

    topics: [
      {
        label: 'Data Products & Platforms',
        score: 90,
      },
      {
        label: 'Business Intelligence',
        score: 90,
      },
      {
        label: 'Predictive Analytics & Forecasting',
        score: 90,
      },
      {
        label: 'Data Engineering & ETL',
        score: 90,
      },
      {
        label: 'Data Visualization',
        score: 90,
      },
      {
        label: 'Decision Support Systems',
        score: 90,
      },
    ],
  },

  {
    id: 'product',
    number: '04',
    title: 'PRODUCT',
    fullTitle: 'Product Engineering',
    score: 80,

    icon: Cpu,

    description:
      'Product strategy combined with system architecture, integrations, automation and technology delivery.',

    topics: [
      {
        label: 'Product Strategy',
        score: 80,
      },
      {
        label: 'Problem Framing',
        score: 80,
      },
      {
        label: 'System Design',
        score: 80,
      },
      {
        label: 'API & Enterprise Integrations',
        score: 80,
      },
      {
        label: 'AI Product Architecture',
        score: 80,
      },
      {
        label: 'Cloud & Platform Delivery',
        score: 80,
      },
    ],
  },
];


/* =========================================================
   RADAR GEOMETRY
========================================================= */

const RADAR_SIZE = 520;
const CENTER = RADAR_SIZE / 2;
const MAX_RADIUS = 155;

const polarToCartesian = (
  index: number,
  total: number,
  radius: number
) => {
  const angle =
    -Math.PI / 2 +
    (index * 2 * Math.PI) / total;

  return {
    x:
      CENTER +
      radius * Math.cos(angle),

    y:
      CENTER +
      radius * Math.sin(angle),
  };
};


const getPolygonPoints = (
  values: number[],
  maxValue = 100
) => {
  const total = values.length;

  return values
    .map((value, index) => {
      const point =
        polarToCartesian(
          index,
          total,
          MAX_RADIUS *
            (value / maxValue)
        );

      return `${point.x},${point.y}`;
    })
    .join(' ');
};


/* =========================================================
   TOPIC LABEL POSITIONING

   IMPORTANT:
   These are intentionally fixed visual zones.

   This avoids the SVG text collision problem.
========================================================= */

const topicPositions = [
  `
    left-1/2
    top-[8%]
    -translate-x-1/2
  `,

  `
    right-[4%]
    top-[25%]
  `,

  `
    right-[4%]
    bottom-[22%]
  `,

  `
    left-1/2
    bottom-[6%]
    -translate-x-1/2
  `,

  `
    left-[4%]
    bottom-[22%]
  `,

  `
    left-[4%]
    top-[25%]
  `,
];


/* =========================================================
   SKILLS SECTION
========================================================= */

export const SkillsSection: React.FC = () => {
  const [selectedDomain, setSelectedDomain] =
    useState(0);

  const activeDomain =
    DOMAIN_PROFILES[selectedDomain];

  const radarValues = useMemo(
    () =>
      activeDomain.topics.map(
        (topic) => topic.score
      ),
    [activeDomain]
  );


  return (
    <section
      id="skills"
      aria-label="Known and Enhancing Technologies"
      className="
        py-20
        px-6
        sm:px-12
        lg:px-20
        max-w-7xl
        mx-auto
        space-y-12
        border-t border-[#2A2A22]
      "
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-end
          justify-between
          border-b border-[#2A2A22]
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
            {/* <span>
              TECHNICAL // 04
            </span> */}

            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-[#4A7860]
              "
            />

            <span className="text-[#8C887F]">
              KNOWN & ENHANCING CAPABILITIES
            </span>
          </div>

          <h2
            className="
              font-display
              font-semibold
              text-3xl
              sm:text-4xl
              text-[#FAF8F5]
              tracking-tight
            "
          >
            Technical Stack & Ecosystem
          </h2>

        </div>

        <div
          className="
            font-mono
            text-xs
            text-[#8C887F]
          "
        >
          MODELS · DATA · PIPELINES · TOOLING
        </div>

      </div>


      {/* =====================================================
          TECHNOLOGY MATRIX
      ===================================================== */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
        "
      >

        {portfolioData.skillCategories.map(
          (cat, idx) => (

            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
              }}
              className="
                bg-[#191913]
                border
                border-[#2A2A22]
                rounded-xl
                p-6
                space-y-5
                hover:border-[#4A7860]/40
                transition-colors
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#2A2A22]
                  pb-3
                "
              >

                <div
                  className="
                    font-display
                    font-semibold
                    text-base
                    sm:text-lg
                    text-[#FAF8F5]
                  "
                >
                  {cat.title}
                </div>

                <span
                  className="
                    font-mono
                    text-xs
                    bg-[#22221B]
                    text-[#4A7860]
                    px-2.5
                    py-1
                    rounded
                    border
                    border-[#2A2A22]
                  "
                >
                  {cat.badge}
                </span>

              </div>


              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                "
              >

                {cat.skills.map(
                  (skill, sIdx) => (

                    <motion.div
                      key={sIdx}
                      whileHover={{
                        y: -2,
                      }}
                      className="
                        flex
                        items-center
                        gap-2
                        px-2.5
                        py-1.5
                        rounded-md
                        bg-[#22221B]
                        border
                        border-[#2A2A22]
                        transition-all
                      "
                    >

                      <TechnologyMark
                        name={skill.name}
                      />

                      <span
                        className="
                          font-mono
                          text-[10px]
                          sm:text-[11px]
                          text-[#D8D4CA]
                        "
                      >
                        {skill.name}
                      </span>

                    </motion.div>

                  )
                )}

              </div>

            </motion.div>

          )
        )}

      </div>


      {/* =====================================================
          ACTIVE DOMAIN DEPTH
      ===================================================== */}

      <div className="space-y-5 pt-4">

        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-end
            justify-between
            gap-3
          "
        >

          <div className="space-y-1">

            <div
              className="
                font-mono
                text-xs
                text-[#4A7860]
                uppercase
                tracking-wider
              "
            >
              AREAS OF ACTIVE DOMAIN DEPTH
            </div>

            <div
              className="
                font-sans
                text-sm
                text-[#8C887F]
              "
            >
              Select a domain to inspect its underlying
              competency dimensions.
            </div>

          </div>

          <div
            className="
              font-mono
              text-[10px]
              text-[#8C887F]
            "
          >
            04 DOMAINS · SELECT TO EXPLORE
          </div>

        </div>


        {/* ===================================================
            TWO COLUMN LAYOUT
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[250px_minmax(0,1fr)]
            gap-5
          "
        >

          {/* =================================================
              LEFT DOMAIN CARDS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-1
              gap-3
            "
          >

            {DOMAIN_PROFILES.map(
              (domain, index) => {

                const Icon =
                  domain.icon;

                const isActive =
                  selectedDomain ===
                  index;

                return (
                  <motion.button
                    key={domain.id}
                    type="button"
                    onClick={() =>
                      setSelectedDomain(
                        index
                      )
                    }
                    whileHover={{
                      x:
                        typeof window !==
                          'undefined' &&
                        window.innerWidth >=
                          1024
                          ? 4
                          : 0,
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    className={`
                      relative
                      text-left
                      rounded-xl
                      border
                      p-4
                      transition-all
                      duration-300
                      overflow-hidden
                      ${
                        isActive
                          ? 'bg-[#202019] border-[#4A7860]/70'
                          : 'bg-[#191913] border-[#2A2A22] hover:border-[#4A7860]/40'
                      }
                    `}
                  >

                    {/* Active rail */}

                    <motion.div
                      animate={{
                        scaleY:
                          isActive
                            ? 1
                            : 0,
                        opacity:
                          isActive
                            ? 1
                            : 0,
                      }}
                      className="
                        absolute
                        left-0
                        top-0
                        bottom-0
                        w-0.5
                        bg-[#4A7860]
                        origin-center
                      "
                    />

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-3
                      "
                    >

                      <div className="space-y-3">

                        <div
                          className={`
                            w-9
                            h-9
                            rounded-lg
                            flex
                            items-center
                            justify-center
                            border
                            ${
                              isActive
                                ? 'bg-[#25251D] border-[#4A7860]/40'
                                : 'bg-[#22221B] border-[#2A2A22]'
                            }
                          `}
                        >
                          <Icon
                            className={`
                              w-4
                              h-4
                              ${
                                isActive
                                  ? 'text-[#5E9A7A]'
                                  : 'text-[#4A7860]'
                              }
                            `}
                          />
                        </div>

                        <div>

                          <div
                            className="
                              font-mono
                              text-[9px]
                              text-[#8C887F]
                              tracking-widest
                              mb-1
                            "
                          >
                            DOMAIN {domain.number}
                          </div>

                          <div
                            className="
                              font-display
                              font-semibold
                              text-sm
                              text-[#FAF8F5]
                            "
                          >
                            {domain.title}
                          </div>

                        </div>

                      </div>


                      <div
                        className={`
                          font-display
                          text-2xl
                          font-semibold
                          ${
                            isActive
                              ? 'text-[#5E9A7A]'
                              : 'text-[#FAF8F5]'
                          }
                        `}
                      >
                        {domain.score}%
                      </div>

                    </div>


                    {/* Score bar */}

                    <div
                      className="
                        mt-4
                        h-px
                        bg-[#2A2A22]
                      "
                    >

                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width:
                            `${domain.score}%`,
                        }}
                        transition={{
                          duration: 0.7,
                        }}
                        className="
                          h-full
                          bg-[#4A7860]
                        "
                      />

                    </div>

                  </motion.button>
                );
              }
            )}

          </div>


          {/* =================================================
              RIGHT RADAR
          ================================================= */}

          <div
            className="
              relative
              min-h-[610px]
              rounded-xl
              border
              border-[#2A2A22]
              bg-[#151510]
              overflow-hidden
            "
          >

            {/* Grid */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.035]
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
                  '38px 38px',
              }}
            />


            {/* Ambient glow */}

            <motion.div
              animate={{
                opacity: [
                  0.03,
                  0.07,
                  0.03,
                ],
                scale: [
                  1,
                  1.1,
                  1,
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-72
                h-72
                rounded-full
                bg-[#4A7860]
                blur-[100px]
                pointer-events-none
              "
            />


            {/* =================================================
                RADAR HEADER
            ================================================= */}

            <div
              className="
                absolute
                top-5
                left-6
                right-6
                z-20
                flex
                items-start
                justify-between
                gap-6
              "
            >

              <div>

                <div
                  className="
                    font-mono
                    text-[9px]
                    text-[#4A7860]
                    tracking-[0.18em]
                    uppercase
                  "
                >
                  DOMAIN {activeDomain.number}
                </div>

                <AnimatePresence mode="wait">

                  <motion.h3
                    key={activeDomain.id}
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      font-display
                      text-lg
                      sm:text-xl
                      text-[#FAF8F5]
                      font-semibold
                      mt-1
                    "
                  >
                    {activeDomain.fullTitle}
                  </motion.h3>

                </AnimatePresence>

                <p
                  className="
                    font-sans
                    text-xs
                    text-[#8C887F]
                    max-w-lg
                    mt-1
                    leading-relaxed
                  "
                >
                  {activeDomain.description}
                </p>

              </div>


              <div
                className="
                  text-right
                  shrink-0
                "
              >

                <div
                  className="
                    font-mono
                    text-[8px]
                    text-[#8C887F]
                    uppercase
                    tracking-wider
                  "
                >
                  DOMAIN DEPTH
                </div>

                <AnimatePresence mode="wait">

                  <motion.div
                    key={activeDomain.id}
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -5,
                    }}
                    className="
                      font-display
                      text-2xl
                      font-semibold
                      text-[#5E9A7A]
                    "
                  >
                    {activeDomain.score}%
                  </motion.div>

                </AnimatePresence>

              </div>

            </div>


            {/* =================================================
                RADAR STAGE

                The SVG is deliberately isolated from labels.
                This is what prevents text collisions.
            ================================================= */}

            <div
              className="
                absolute
                left-1/2
                top-[52%]
                -translate-x-1/2
                -translate-y-1/2
                w-[min(72%,520px)]
                aspect-square
              "
            >

              <svg
                viewBox={`0 0 ${RADAR_SIZE} ${RADAR_SIZE}`}
                className="
                  w-full
                  h-full
                  overflow-visible
                "
              >

                {/* Radar rings */}

                {[20, 40, 60, 80, 100].map(
                  (level) => (

                    <motion.polygon
                      key={level}
                      points={getPolygonPoints(
                        activeDomain.topics.map(
                          () => level
                        )
                      )}
                      fill="none"
                      stroke="#4A7860"
                      strokeWidth={
                        level === 100
                          ? 1
                          : 0.7
                      }
                      strokeOpacity={
                        level === 100
                          ? 0.32
                          : 0.12
                      }
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                    />

                  )
                )}


                {/* Axis lines */}

                {activeDomain.topics.map(
                  (_, index) => {

                    const point =
                      polarToCartesian(
                        index,
                        activeDomain.topics
                          .length,
                        MAX_RADIUS
                      );

                    return (
                      <motion.line
                        key={index}
                        x1={CENTER}
                        y1={CENTER}
                        x2={point.x}
                        y2={point.y}
                        stroke="#4A7860"
                        strokeWidth="0.8"
                        strokeOpacity="0.18"
                        initial={{
                          pathLength: 0,
                        }}
                        animate={{
                          pathLength: 1,
                        }}
                        transition={{
                          duration: 0.5,
                          delay:
                            index * 0.04,
                        }}
                      />
                    );
                  }
                )}


                {/* Data polygon */}

                <AnimatePresence mode="wait">

                  <motion.polygon
                    key={activeDomain.id}
                    points={getPolygonPoints(
                      radarValues
                    )}
                    fill="#4A7860"
                    fillOpacity="0.12"
                    stroke="#4A7860"
                    strokeWidth="1.6"
                    strokeOpacity="0.85"
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [
                        0.16,
                        1,
                        0.3,
                        1,
                      ],
                    }}
                    style={{
                      transformOrigin:
                        `${CENTER}px ${CENTER}px`,
                    }}
                  />

                </AnimatePresence>


                {/* Data points */}

                {activeDomain.topics.map(
                  (topic, index) => {

                    const point =
                      polarToCartesian(
                        index,
                        activeDomain.topics
                          .length,
                        MAX_RADIUS *
                          (topic.score /
                            100)
                      );

                    return (
                      <motion.circle
                        key={`${activeDomain.id}-${topic.label}`}
                        cx={point.x}
                        cy={point.y}
                        r="5"
                        fill="#4A7860"
                        stroke="#FAF8F5"
                        strokeWidth="1"
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.35,
                          delay:
                            0.15 +
                            index * 0.06,
                        }}
                      />
                    );
                  }
                )}

              </svg>


              {/* =================================================
                  CENTER VALUE
              ================================================= */}

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeDomain.id}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    text-center
                    pointer-events-none
                  "
                >

                  <div
                    className="
                      font-mono
                      text-[8px]
                      text-[#8C887F]
                      uppercase
                      tracking-[0.2em]
                    "
                  >
                    {activeDomain.title}
                  </div>

                  <div
                    className="
                      font-display
                      text-2xl
                      font-semibold
                      text-[#FAF8F5]
                    "
                  >
                    {activeDomain.score}%
                  </div>

                  <div
                    className="
                      font-mono
                      text-[7px]
                      text-[#4A7860]
                      uppercase
                      tracking-widest
                    "
                  >
                    DOMAIN DEPTH
                  </div>

                </motion.div>

              </AnimatePresence>

            </div>


            {/* =================================================
                FIXED TOPIC LABELS

                These are outside SVG.
                Each gets its own visual zone.
            ================================================= */}

            <AnimatePresence mode="wait">

              <React.Fragment key={activeDomain.id}>

                {activeDomain.topics.map(
                  (topic, index) => {

                    const position =
                      topicPositions[
                        index
                      ];

                    const alignment =
                      index === 0 ||
                      index === 3
                        ? 'items-center text-center'
                        : index === 1 ||
                            index === 2
                          ? 'items-start text-left'
                          : 'items-end text-right';

                    return (
                      <motion.div
                        key={`${activeDomain.id}-${topic.label}`}
                        initial={{
                          opacity: 0,
                          y:
                            index < 3
                              ? 8
                              : -8,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          delay:
                            index * 0.04,
                        }}
                        className={`
                          absolute
                          ${position}
                          z-20
                          w-[125px]
                          sm:w-[155px]
                          ${alignment}
                          pointer-events-none
                        `}
                      >

                        <div
                          className="
                            inline-flex
                            flex-col
                            gap-1
                            rounded-lg
                            border
                            border-[#2A2A22]
                            bg-[#181812]/95
                            backdrop-blur-sm
                            px-3
                            py-2
                            shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                          "
                        >

                          <span
                            className="
                              font-sans
                              text-[10px]
                              sm:text-[11px]
                              leading-[1.25]
                              text-[#D8D4CA]
                            "
                          >
                            {topic.label}
                          </span>

                          <span
                            className="
                              font-mono
                              text-[10px]
                              font-semibold
                              text-[#4A7860]
                            "
                          >
                            {topic.score}%
                          </span>

                        </div>

                      </motion.div>
                    );
                  }
                )}

              </React.Fragment>

            </AnimatePresence>


            {/* Bottom instruction */}

            <div
              className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                font-mono
                text-[8px]
                text-[#8C887F]
                uppercase
                tracking-[0.18em]
                whitespace-nowrap
              "
            >
              SELECT ANOTHER DOMAIN TO COMPARE
            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          ACTIVELY EXPANDING
      ===================================================== */}

      <div
        className="
          bg-[#191913]
          border
          border-[#2A2A22]
          rounded-xl
          p-6
          space-y-4
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[#2A2A22]
            pb-3
          "
        >

          <div
            className="
              font-mono
              text-xs
              text-[#4A7860]
              uppercase
              tracking-wider
              flex
              items-center
              gap-2
            "
          >
            <Terminal className="w-3.5 h-3.5" />

            <span>
              ACTIVELY EXPANDING & MODERNIZING
            </span>
          </div>

          <span
            className="
              hidden
              sm:block
              font-mono
              text-xs
              text-[#8C887F]
            "
          >
            LANGUAGES & WEB CORE
          </span>

        </div>


        <div
          className="
            flex
            flex-wrap
            items-center
            gap-3
          "
        >

          {portfolioData.learningTechnologies.map(
            (tech, idx) => (

              <motion.div
                key={idx}
                whileHover={{
                  y: -2,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3.5
                  py-2
                  rounded-lg
                  bg-[#22221B]
                  border
                  border-[#2A2A22]
                "
              >

                <TechnologyMark
                  name={tech.name}
                />

                <span
                  className="
                    font-mono
                    text-xs
                    text-[#FAF8F5]
                    font-medium
                  "
                >
                  {tech.name}
                </span>

                <span
                  className="
                    text-[10px]
                    font-mono
                    text-[#8C887F]
                  "
                >
                  ({tech.level})
                </span>

              </motion.div>

            )
          )}

        </div>

      </div>

    </section>
  );
};