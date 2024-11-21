'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Twitter, Linkedin, Github } from 'lucide-react'
import Image from "next/image"
import { useState, useEffect } from 'react'
import { FaPython, FaAws, FaGitAlt } from 'react-icons/fa'
import { SiR, SiLatex, SiStata, SiIbm } from 'react-icons/si'

function TypewriterText({ text, delay = 50, startDelay = 0 }) {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex === 0) {
      const timeout = setTimeout(() => {
        setCurrentIndex(1)
      }, startDelay)
      return () => clearTimeout(timeout)
    }

    if (currentIndex <= text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentIndex))
        setCurrentIndex(currentIndex + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay, startDelay])

  return <span>{currentText}</span>
}

export function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-[#86C7B5] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-10"
          />
        </div>
        <div className="container mx-auto py-6 px-4 relative z-10">
          <nav className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <h1 className="text-4xl font-bold"> {/* Updated font size */}
              <span className="text-4xl">L</span>auren <span className="text-4xl">L</span>eek
            </h1>
            <ul className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
              <li>
                <a href="#home" className="hover:text-gray-200 relative group px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </a>
              </li>
              <div className="w-px h-5 bg-gradient-to-b from-white/5 via-white/40 to-white/5"></div>
              <li>
                <a href="#portfolio" className="hover:text-gray-200 relative group px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10">
                  Portfolio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </a>
              </li>
              <div className="w-px h-5 bg-gradient-to-b from-white/5 via-white/40 to-white/5"></div>
              <li>
                <a href="#cv" className="hover:text-gray-200 relative group px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10">
                  CV
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </a>
              </li>
              <div className="w-px h-5 bg-gradient-to-b from-white/5 via-white/40 to-white/5"></div>
              <li>
                <a href="#blog" className="hover:text-gray-200 relative group px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10">
                  Blog
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 mt-12">
        <section id="home" className="py-16 flex items-center justify-center relative min-h-[500px]"> {/* reduced from py-24 and min-h-[600px] */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/frankfurt_sky.jpg"
              alt="Frankfurt Skyline"
              layout="fill"
              objectFit="cover"
              className="opacity-30" // changed from opacity-10 to make it less transparent
            />
          </div>
          <div className="text-left space-y-8 mb-12 relative z-10"> {/* increased from space-y-6 for separator space */}
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 whitespace-nowrap">
              <TypewriterText text="I have passion for " startDelay={0} />
              <span className="font-mono text-[#4BA396]">data()</span>
            </h2>
            {/* Separator */}
            <div className="h-0.5 bg-gradient-to-r from-[#86C7B5] to-[#68a797] opacity-50 mx-2"></div>
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 whitespace-nowrap">
              <TypewriterText text="I have passion for " startDelay={1500} />
              <span className="font-mono text-[#4BA396]">people()</span>
            </h2>
            {/* Separator */}
            <div className="h-0.5 bg-gradient-to-r from-[#86C7B5] to-[#68a797] opacity-50 mx-2"></div>
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 whitespace-nowrap">
              <TypewriterText text="I believe in data driven " startDelay={3000} />
              <span className="font-mono text-[#4BA396]">solutions()</span>
            </h2>
          </div>
        </section>

        <hr className="section-separator" />

        <section id="portfolio" className="py-12">
          <h2 className="text-5xl font-bold mb-4 text-center text-gray-800 relative inline-block">
            Portfolio
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#86C7B5]"></span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-gray-600 mb-8 text-xl relative py-4">
              <span className="absolute left-0 top-0 w-16 h-0.5 bg-gradient-to-r from-[#86C7B5] to-transparent"></span>
              I am always <em className="text-[#4BA396] not-italic font-semibold">learning and experimenting</em>. 
              This is a glimpse of the latest projects I have been working on:
              <span className="absolute right-0 bottom-0 w-16 h-0.5 bg-gradient-to-l from-[#86C7B5] to-transparent"></span>
            </p>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 w-full justify-center gap-2 bg-transparent">
              <TabsTrigger 
                value="all" 
                className="rounded-full px-6 py-2 data-[state=active]:bg-[#86C7B5] data-[state=active]:text-white"
              >
                Show all
              </TabsTrigger>
              <TabsTrigger 
                value="dataviz" 
                className="rounded-full px-6 py-2 data-[state=active]:bg-[#86C7B5] data-[state=active]:text-white"
              >
                Data viz
              </TabsTrigger>
              <TabsTrigger 
                value="academic" 
                className="rounded-full px-6 py-2 data-[state=active]:bg-[#86C7B5] data-[state=active]:text-white"
              >
                Academic papers
              </TabsTrigger>
              <TabsTrigger 
                value="ml" 
                className="rounded-full px-6 py-2 data-[state=active]:bg-[#86C7B5] data-[state=active]:text-white"
              >
                Machine learning
              </TabsTrigger>
              <TabsTrigger 
                value="web" 
                className="rounded-full px-6 py-2 data-[state=active]:bg-[#86C7B5] data-[state=active]:text-white"
              >
                Web developing
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Changed from grid-cols-4 to grid-cols-3 and increased gap */}
                {/* First project - Central Bank Talk */}
                <div 
                  className="relative overflow-hidden rounded-lg shadow-lg mx-auto col-span-full lg:col-span-1 flex justify-center items-center"
                  onMouseEnter={() => setHoveredProject(1)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <Image
                    src="/images/website_CBT.png"
                    alt="Central Bank Talk"
                    width={400} // Increased from 300
                    height={300} // Increased from 200
                    className="w-full h-auto object-contain"
                  />
                  {hoveredProject === 1 && (
                    <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
                      <p className="text-white text-center">Central Bank Talk: a website with interactive tools to get insights into central bank communication.</p>
                    </div>
                  )}
                </div>
                
                {/* Project 2 - Strava Visualization */}
                <div 
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  onMouseEnter={() => setHoveredProject(2)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="grid grid-cols-2 gap-2 h-full">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/strava.jpg"
                        alt="Strava Visualization"
                        width={400}
                        height={300}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/cycle_stand.jpg"
                        alt="Cycle Stand"
                        width={400}
                        height={300}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  {hoveredProject === 2 && (
                    <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
                      <p className="text-white text-center">Strava personal data visualisation using the Strava API.</p>
                    </div>
                  )}
                </div>

                {/* Project 3 - Beamer Template */}
                <div 
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  onMouseEnter={() => setHoveredProject(3)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <Image
                    src="/images/beamer_template.png"
                    alt="University Beamer Template"
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                  {hoveredProject === 3 && (
                    <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
                      <p className="text-white text-center">University beamer template: I developed a stylish latex template for academic presentations.</p>
                    </div>
                  )}
                </div>

                {/* Remaining projects */}
                {[4, 5, 6, 7, 8, 9].map((project) => (
                  <div 
                    key={project} 
                    className="relative overflow-hidden rounded-lg"
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <Image
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={`Project ${project}`}
                      width={300}
                      height={200}
                      className="w-full h-auto"
                    />
                    {hoveredProject === project && (
                      <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
                        <p className="text-white text-center">Short description for Project {project}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <hr className="section-separator" />

        <section id="cv" className="py-12 relative">
          <h2 className="text-5xl font-bold mb-4 text-center text-gray-800 relative inline-block">
            CV
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#86C7B5]"></span>
          </h2>
          <div className="mt-8 bg-gray-100 p-8 rounded-lg">
            <div className="flex justify-end mb-8">
              <Button 
                variant="fancy" 
                onClick={() => window.open('/cv.pdf', '_blank')}
                className="bg-[#86C7B5] text-white hover:bg-[#4BA396]"
              >
                Download CV
              </Button>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical Timeline Line */}
              <div className="absolute left-0 h-full w-0.5 bg-[#86C7B5]"></div>

              {/* Education Timeline Items */}
              <div className="space-y-12 relative">
                {/* PhD Entry */}
                <div className="ml-8 relative">
                  <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-[#86C7B5]"></div>
                  <div className="p-4 bg-white rounded-lg shadow-md">
                    <span className="text-sm font-medium text-[#4BA396]">2021 - 2024</span>
                    <h5 className="text-lg font-semibold mt-1">PhD in Political Science</h5>
                    <p className="text-gray-600">European University Institute</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Thesis: Essays in Central Bank Communication</li>
                      <li>Supervisors: Prof. Simon Hix and Prof. Waltraud Schelke</li>
                      <li>Visiting Stay at London School of Economics</li>
                    </ul>
                  </div>
                </div>

                {/* MSc Entry */}
                <div className="ml-8 relative">
                  <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-[#86C7B5]"></div>
                  <div className="p-4 bg-white rounded-lg shadow-md">
                    <span className="text-sm font-medium text-[#4BA396]">2020 - 2021</span>
                    <h5 className="text-lg font-semibold mt-1">MSc in Political Economy of Europe</h5>
                    <p className="text-gray-600">London School of Economics</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Best Dissertation Prize</li>
                      <li>Best Overall Performance in MSc</li>
                    </ul>
                  </div>
                </div>

                {/* BSc Entry */}
                <div className="ml-8 relative">
                  <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-[#86C7B5]"></div>
                  <div className="p-4 bg-white rounded-lg shadow-md">
                    <span className="text-sm font-medium text-[#4BA396]">2017 - 2020</span>
                    <h5 className="text-lg font-semibold mt-1">BSc Liberal Arts and Sciences</h5>
                    <p className="text-gray-600">University College Utrecht</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Summa Cum Laude</li>
                      <li>Dean's List 2017-2020</li>
                      <li>Major: Economics with extra courses in Statistics, Law and Data Visualization</li>
                      <li>Minor: Learning from Big Data at Rotterdam School of Management
                        <ul className="list-disc list-inside ml-4">
                          <li>Online Experiments</li>
                          <li>Natural Language Processing</li>
                          <li>Multi-armed Bandit</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Work Experience */}
                <div className="ml-8 relative">
                  <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-[#86C7B5]"></div>
                  <div className="p-4 bg-white rounded-lg shadow-md">
                    <h5 className="text-lg font-semibold mt-1">Research & Teaching Experience</h5>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Research Assistant in Data Science, King's College London (2023-2024)</li>
                      <li>Research Assistant in Political Behaviour, LSE (2023)</li>
                      <li>Research Assistant in Survey Analysis, EUI (2021-2022)</li>
                      <li>Teaching Assistant in Quantitative Methods, KCL (2023-2024)</li>
                      <li>Teaching Assistant in Quantitative Methods, EUI (2022)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-separator" />

        <section id="cv" className="py-12 relative">
          <h2 className="text-5xl font-bold mb-4 text-center text-gray-800 relative inline-block">
            CV
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#86C7B5]"></span>
          </h2>
          <div className="mt-8 bg-gray-100 p-8 rounded-lg">
            <div className="flex justify-end mb-8">
              <Button 
                variant="fancy" 
                onClick={() => window.open('/cv.pdf', '_blank')}
                className="bg-[#86C7B5] text-white hover:bg-[#4BA396]"
              >
                Download CV
              </Button>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-[1fr,2px,1fr] gap-8">
              {/* Education Column */}
              <div className="space-y-24 text-right">
                <div>
                  <span className="text-sm font-medium text-[#4BA396]">2021 - Present</span>
                  <h5 className="text-lg font-semibold mt-1">PhD Political Science</h5>
                  <p className="text-gray-600">European University Institute & LSE</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#4BA396]">2020 - 2021</span>
                  <h5 className="text-lg font-semibold mt-1">MSc Political Economy</h5>
                  <p className="text-gray-600">LSE</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#4BA396]">2017 - 2020</span>
                  <h5 className="text-lg font-semibold mt-1">BSc Economics</h5>
                  <p className="text-gray-600">University Name</p>
                </div>
              </div>

              {/* Timeline Column */}
              <div className="relative">
                <div className="absolute inset-0 w-0.5 bg-[#86C7B5] left-1/2 -translate-x-1/2"></div>
                <div className="relative h-full">
                  <div className="absolute left-1/2 -translate-x-1/2 top-[10%]">
                    <div className="w-4 h-4 rounded-full bg-[#86C7B5]"></div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-[50%]">
                    <div className="w-4 h-4 rounded-full bg-[#86C7B5]"></div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-[90%]">
                    <div className="w-4 h-4 rounded-full bg-[#86C7B5]"></div>
                  </div>
                </div>
              </div>

              {/* Experience Column */}
              <div className="space-y-24">
                <div>
                  <span className="text-sm font-medium text-[#4BA396]">2021 - Present</span>
                  <h5 className="text-lg font-semibold mt-1">Research Assistant</h5>
                  <p className="text-gray-600">King's College London</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#4BA396]">2020 - 2021</span>
                  <h5 className="text-lg font-semibold mt-1">Teaching Assistant</h5>
                  <p className="text-gray-600">LSE</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#4BA396]">2017 - 2020</span>
                  <h5 className="text-lg font-semibold mt-1">Industry Position</h5>
                  <p className="text-gray-600">Company Name</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Teaching Section */}
            <div>
              <h4 className="text-xl font-semibold text-[#4BA396] mb-4">Teaching Experience</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Teaching Assistant, Econometrics (Graduate Level)</li>
                <li>Instructor, Python for Economics</li>
              </ul>
            </div>

            {/* Industry Experience */}
            <div>
              <h4 className="text-xl font-semibold text-[#4BA396] mb-4">Industry Experience</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Data Scientist at Tech Company X</li>
                <li>Economic Consultant at Firm Y</li>
              </ul>
            </div>

            {/* Research Assistantships */}
            <div>
              <h4 className="text-xl font-semibold text-[#4BA396] mb-4">Research Assistantships</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Research Assistant at Central Bank Z</li>
                <li>Research Assistant at University W</li>
              </ul>
            </div>

            {/* Research */}
            <div>
              <h4 className="text-xl font-semibold text-[#4BA396] mb-4">Research</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Working Paper 1: "Title of Paper"</li>
                <li>Working Paper 2: "Title of Paper"</li>
              </ul>
            </div>

            {/* Skills Section */}
            <div>
              <h4 className="text-xl font-semibold text-[#4BA396] mb-4">Technical Skills</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Python */}
                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <img src="/icons/python-logo.png" alt="Python" className="w-6 h-6 mr-2" />
                  <span className="text-gray-700">Python</span>
                </div>

                {/* R */}
                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <img src="/icons/r-logo.png" alt="R" className="w-6 h-6 mr-2" />
                  <span className="text-gray-700">R</span>
                </div>

                {/* Stata */}
                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <img src="/icons/stata-logo.png" alt="Stata" className="w-6 h-6 mr-2" />
                  <span className="text-gray-700">Stata</span>
                </div>

                {/* SPSS */}
                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <img src="/icons/spss-logo.png" alt="SPSS" className="w-6 h-6 mr-2" />
                  <span className="text-gray-700">SPSS</span>
                </div>

                {/* LaTeX */}
                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <img src="/icons/latex-logo.png" alt="LaTeX" className="w-6 h-6 mr-2" />
                  <span className="text-gray-700">LaTeX</span>
                </div>

                {/* Git */}
                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <img src="/icons/git-logo.png" alt="Git" className="w-6 h-6 mr-2" />
                  <span className="text-gray-700">Git</span>
                </div>

                {/* AWS */}
                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <img src="/icons/aws-logo.png" alt="AWS" className="w-6 h-6 mr-2" />
                  <span className="text-gray-700">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <hr className="section-separator" />

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">&copy; Lauren Leek</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Twitter" className="text-gray-600 hover:text-[#86C7B5]">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn" className="text-gray-600 hover:text-[#86C7B5]">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="GitHub" className="text-gray-600 hover:text-[#86C7B5]">
                <Github className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="link" className="text-gray-600 hover:text-[#86C7B5]">Privacy</Button>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .section-separator {
          border: none;
          border-top: 4px solid;
          border-image: linear-gradient(to right, #1e3a8a, #86C7B5);
          border-image-slice: 1;
          margin: 2rem 0;
        }
      `}</style>
    </div>
  )
}