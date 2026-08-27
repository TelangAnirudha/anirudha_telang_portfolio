import React, { useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  FileText,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type BlogPost = {
  id: string;
  index: string;
  type: 'article' | 'external';
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  url?: string;

  // Used when type === "article"
  content?: string[];
};

const blogPosts: BlogPost[] = [
  {
    id: 'markov-chains-project-planning',
    index: 'No. 01',
    type: 'external',
    category: 'DATA × PROJECT MANAGEMENT',
    title:
      'Beyond PERT and Gantt: Using Markov Chains for Smarter Project Planning',
    excerpt:
      'A data-driven approach to project forecasting that treats delivery as a probabilistic process rather than a single-point estimate.',
    date: 'Aug 27, 2026',
    readTime: 'LinkedIn article',
    tags: [
      'Data Science',
      'Project Management',
      'Markov Chains',
      'Forecasting',
    ],
    url: 'https://www.linkedin.com/pulse/beyond-pert-gantt-using-markov-chains-smarter-project-telang-cspo--8awnf/',
  },

  {
    id: 'ai-governance-starting-smart',
    index: 'No. 02',
    type: 'external',
    category: 'AI × GOVERNANCE',
    title:
      'AI for Governance: Starting Smart, Scaling Right',
    excerpt:
      'Why successful government AI programs should begin with focused use cases, strong governance and measurable public value before attempting large-scale transformation.',
    date: 'May 2, 2025',
    readTime: 'LinkedIn article',
    tags: [
      'AI',
      'Governance',
      'GovTech',
      'AI Product Management',
    ],
    url: 'https://www.linkedin.com/pulse/ai-governance-starting-smart-scaling-right-anirudha-jkzec/',
  },

  {
    id: 'strategic-refusal',
    index: 'No. 03',
    type: 'external',
    category: 'PRODUCT MANAGEMENT',
    title:
      'The PM skill nobody teaches: "Strategic refusal"',
    excerpt:
      'Why effective product managers need to say no strategically, protect product focus and make trade-offs visible to stakeholders.',
    date: 'Nov 24, 2025',
    readTime: 'LinkedIn article',
    tags: [
      'Product Management',
      'Strategy',
      'Prioritization',
      'Leadership',
    ],
    url: 'https://www.linkedin.com/pulse/pm-skill-nobody-teaches-strategic-refusal-anirudha-telang-cspo--twxbc/',
  },

  {
    id: 'hidden-tax-playing-safe',
    index: 'No. 04',
    type: 'external',
    category: 'PRODUCT × INNOVATION',
    title:
      "The hidden tax of 'playing it safe'",
    excerpt:
      'How organizational barriers, rigid processes and AI anxiety can quietly prevent product teams from experimenting and innovating.',
    date: 'Nov 21, 2025',
    readTime: 'LinkedIn article',
    tags: [
      'Product Management',
      'Innovation',
      'AI',
      'Organizational Design',
    ],
    url: 'https://www.linkedin.com/pulse/hidden-tax-playing-safe-anirudha-telang-cspo--kli7c/',
  },

  {
    id: 't-shaped-pm',
    index: 'No. 05',
    type: 'external',
    category: 'PRODUCT MANAGEMENT',
    title:
      'The T-Shaped PM: Why Depth + Breadth = Strategic Value',
    excerpt:
      'Why product managers need both deep domain expertise and broad cross-functional understanding to operate as strategic partners.',
    date: 'Nov 25, 2025',
    readTime: 'LinkedIn article',
    tags: [
      'Product Management',
      'Leadership',
      'AEC',
      'Digital Transformation',
    ],
    url: 'https://www.linkedin.com/pulse/t-shaped-pm-why-depth-breadth-strategic-value-anirudha-telang-cspo--dwxwc/',
  },

  {
    id: 'alignment-velocity',
    index: 'No. 06',
    type: 'external',
    category: 'PRODUCT STRATEGY',
    title:
      'Alignment > Velocity: The hard truth about small wins',
    excerpt:
      'Why isolated feature delivery does not necessarily compound into value, and how alignment toward a shared outcome changes the equation.',
    date: 'Nov 26, 2025',
    readTime: 'LinkedIn article',
    tags: [
      'Product Strategy',
      'Execution',
      'Alignment',
      'Outcomes',
    ],
    url: 'https://www.linkedin.com/pulse/alignment-velocity-hard-truth-small-wins-anirudha-telang-cspo--umm0c/',
  },

  {
    id: 'effective-mom',
    index: 'No. 07',
    type: 'external',
    category: 'PRODUCT × EXECUTION',
    title:
      "If your MOM doesn't prevent the next meeting, you wrote it wrong",
    excerpt:
      'A practical framework for turning meeting minutes from passive documentation into decision records, accountability tools and execution artifacts.',
    date: 'Nov 28, 2025',
    readTime: 'LinkedIn article',
    tags: [
      'Product Management',
      'Execution',
      'Communication',
      'Leadership',
    ],
    url: 'https://www.linkedin.com/pulse/your-mom-doesnt-prevent-next-meeting-you-wrote-wrong-telang-cspo--k53dc/',
  },
];

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] =
    useState<BlogPost | null>(null);

  const handleOpenPost = (post: BlogPost) => {
    if (post.type === 'article') {
      setSelectedPost(post);
    } else if (post.url) {
      window.open(
        post.url,
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <section
      id="insights"
      aria-label="Insights and Writing"
      className="
        py-24
        px-6
        sm:px-12
        lg:px-20
        max-w-7xl
        mx-auto
        space-y-12
        border-t
        border-[#2A2A22]
      "
    >
      {/* =========================================================
          HEADER
      ========================================================= */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-end
          justify-between
          gap-5
          border-b
          border-[#2A2A22]
          pb-6
        "
      >
        <div className="space-y-3">

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
            <span>PILLARS // 04</span>

            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-[#4A7860]
              "
            />

            <span className="text-[#8C887F]">
              WRITING & KNOWLEDGE
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
            Insights & Writing
          </h2>

          <p
            className="
              font-sans
              text-sm
              text-[#8C887F]
              font-light
              max-w-2xl
              leading-relaxed
            "
          >
            Thinking through Product, AI, Data and AEC —
            from practical architecture to the problems
            worth solving.
          </p>
        </div>

        <div
          className="
            font-mono
            text-xs
            text-[#8C887F]
          "
        >
          IDEAS × SYSTEMS × OUTCOMES
        </div>
      </div>


      {/* =========================================================
          FEATURED WRITING
      ========================================================= */}
      <div className="space-y-6">

        <div
          className="
            font-mono
            text-[10px]
            text-[#8C887F]
            uppercase
            tracking-[0.18em]
          "
        >
          SELECTED THINKING
        </div>


        {/* =======================================================
            POSTS
        ======================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                min-h-[390px]
                rounded-2xl
                border
                border-[#2A2A22]
                bg-[#191913]
                overflow-hidden
                transition-colors
                duration-500
                hover:border-[#4A7860]/60
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
                  backgroundSize: '30px 30px',
                }}
              />

              {/* Ambient light */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.08, 0.16, 0.08],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  -top-32
                  -right-32
                  w-72
                  h-72
                  rounded-full
                  bg-[#4A7860]
                  blur-3xl
                  opacity-10
                  pointer-events-none
                "
              />

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
                    TOP
                ================================================= */}
                <div className="space-y-7">

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                    "
                  >

                    {/* Content type */}
                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-[#22221B]
                        border
                        border-[#2A2A22]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      {post.type === 'article' ? (
                        <BookOpen
                          className="
                            w-5
                            h-5
                            text-[#4A7860]
                          "
                        />
                      ) : (
                        <ExternalLink
                          className="
                            w-5
                            h-5
                            text-[#4A7860]
                          "
                        />
                      )}
                    </div>

                    {/* Index */}
                    <span
                      className="
                        font-display
                        text-2xl
                        font-semibold
                        text-[#4A7860]/50
                      "
                    >
                      {post.index.replace(
                        'No. ',
                        ''
                      )}
                    </span>
                  </div>


                  {/* Category */}
                  <div
                    className="
                      font-mono
                      text-[10px]
                      text-[#4A7860]
                      uppercase
                      tracking-[0.18em]
                    "
                  >
                    {post.category}
                  </div>


                  {/* Title */}
                  <div className="space-y-3">

                    <h3
                      className="
                        font-display
                        font-semibold
                        text-xl
                        sm:text-2xl
                        text-[#FAF8F5]
                        tracking-tight
                        leading-tight
                      "
                    >
                      {post.title}
                    </h3>

                    <div
                      className="
                        w-10
                        h-px
                        bg-[#4A7860]
                        group-hover:w-16
                        transition-all
                        duration-500
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
                      {post.excerpt}
                    </p>

                  </div>
                </div>


                {/* =================================================
                    BOTTOM
                ================================================= */}
                <div className="pt-6 mt-8 border-t border-[#2A2A22]">

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">

                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          font-mono
                          text-[9px]
                          text-[#8C887F]
                          border
                          border-[#2A2A22]
                          rounded-full
                          px-2.5
                          py-1
                        "
                      >
                        {tag}
                      </span>
                    ))}

                  </div>


                  {/* Meta */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >

                    <div
                      className="
                        font-mono
                        text-[9px]
                        text-[#8C887F]
                      "
                    >
                      {post.date}
                      {' // '}
                      {post.readTime}
                    </div>


                    {/* Read button */}
                    <button
                      type="button"
                      onClick={() =>
                        handleOpenPost(post)
                      }
                      className="
                        inline-flex
                        items-center
                        gap-2
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-[#D8D4CA]
                        hover:text-[#4A7860]
                        transition-colors
                        cursor-pointer
                      "
                    >
                      {post.type === 'article'
                        ? 'READ HERE'
                        : 'READ SOURCE'}

                      <ArrowUpRight
                        className="
                          w-3.5
                          h-3.5
                        "
                      />
                    </button>

                  </div>

                </div>
              </div>


              {/* Bottom accent */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-px
                  bg-[#4A7860]/0
                  group-hover:bg-[#4A7860]/60
                  transition-colors
                  duration-500
                "
              />

            </motion.article>
          ))}

        </div>
      </div>


      {/* =========================================================
          INLINE ARTICLE READER
      ========================================================= */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              border
              border-[#2A2A22]
              rounded-2xl
              bg-[#191913]
              overflow-hidden
            "
          >

            {/* Reader top line */}
            <div
              className="
                h-px
                w-full
                bg-[#4A7860]/50
              "
            />

            <div className="p-6 sm:p-10 lg:p-14">

              {/* Reader header */}
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-6
                  border-b
                  border-[#2A2A22]
                  pb-7
                  mb-8
                "
              >

                <div className="space-y-4">

                  <div
                    className="
                      font-mono
                      text-[10px]
                      text-[#4A7860]
                      uppercase
                      tracking-[0.18em]
                    "
                  >
                    {selectedPost.category}
                    {' // '}
                    {selectedPost.index}
                  </div>

                  <h3
                    className="
                      font-display
                      font-semibold
                      text-3xl
                      sm:text-4xl
                      lg:text-5xl
                      text-[#FAF8F5]
                      tracking-tight
                      leading-tight
                      max-w-4xl
                    "
                  >
                    {selectedPost.title}
                  </h3>

                  <div
                    className="
                      font-mono
                      text-[10px]
                      text-[#8C887F]
                    "
                  >
                    {selectedPost.date}
                    {' // '}
                    {selectedPost.readTime}
                  </div>

                </div>


                {/* Close */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedPost(null)
                  }
                  aria-label="Close article"
                  className="
                    shrink-0
                    w-10
                    h-10
                    rounded-full
                    border
                    border-[#2A2A22]
                    flex
                    items-center
                    justify-center
                    text-[#8C887F]
                    hover:text-[#FAF8F5]
                    hover:border-[#4A7860]
                    transition-colors
                    cursor-pointer
                  "
                >
                  <X className="w-4 h-4" />
                </button>

              </div>


              {/* Article body */}
              <div className="max-w-3xl">

                <div
                  className="
                    font-sans
                    text-base
                    sm:text-lg
                    text-[#D8D4CA]
                    font-light
                    leading-[1.85]
                    space-y-6
                  "
                >
                  {selectedPost.content?.map(
                    (paragraph, index) => (
                      <p key={index}>
                        {paragraph}
                      </p>
                    )
                  )}
                </div>

              </div>


              {/* Reader footer */}
              <div
                className="
                  mt-10
                  pt-6
                  border-t
                  border-[#2A2A22]
                  flex
                  flex-wrap
                  items-center
                  justify-between
                  gap-4
                "
              >

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {selectedPost.tags.map(
                    (tag) => (
                      <span
                        key={tag}
                        className="
                          font-mono
                          text-[9px]
                          text-[#8C887F]
                          border
                          border-[#2A2A22]
                          rounded-full
                          px-2.5
                          py-1
                        "
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <div
                  className="
                    font-mono
                    text-[9px]
                    text-[#4A7860]
                    uppercase
                    tracking-wider
                    flex
                    items-center
                    gap-2
                  "
                >
                  <FileText className="w-3 h-3" />
                  END OF ARTICLE
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};