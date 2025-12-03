// Mock data for WorkOS prototype

export interface Employee {
  id: string
  name: string
  role: string
  department: string
  avatar: string
  skills: Skill[]
  availability: "Available" | "Busy" | "On Leave"
}

export interface Skill {
  name: string
  category: "Technical" | "Soft" | "Leadership" | "Domain"
  proficiency: number // 0-100
  targetProficiency?: number
  trend: "up" | "down" | "stable"
}

export interface SkillGap {
  skill: string
  current: number
  required: number
  gap: number
  priority: "High" | "Medium" | "Low"
}

export interface LearningPath {
  id: string
  title: string
  description: string
  duration: string
  skills: string[]
  progress: number
  status: "Not Started" | "In Progress" | "Completed"
}

export interface ProjectMatch {
  employeeId: string
  employeeName: string
  role: string
  matchScore: number
  skillsMatched: string[]
  skillsMissing: string[]
  availability: "Available" | "Busy" | "On Leave"
  growthPotential: number
}

// Sample employees data
export const employees: Employee[] = [
  {
    id: "1",
    name: "LeBron James",
    role: "Senior Developer",
    department: "Engineering",
    avatar: "/professional-woman-developer.png",
    availability: "Available",
    skills: [
      { name: "React", category: "Technical", proficiency: 90, targetProficiency: 95, trend: "up" },
      { name: "TypeScript", category: "Technical", proficiency: 85, targetProficiency: 90, trend: "up" },
      { name: "Node.js", category: "Technical", proficiency: 75, targetProficiency: 85, trend: "stable" },
      { name: "Communication", category: "Soft", proficiency: 80, targetProficiency: 85, trend: "up" },
      { name: "Problem Solving", category: "Soft", proficiency: 88, targetProficiency: 90, trend: "stable" },
      { name: "Team Leadership", category: "Leadership", proficiency: 70, targetProficiency: 80, trend: "up" },
    ],
  },
  {
    id: "2",
    name: "Jackie Chan",
    role: "Product Manager",
    department: "Product",
    avatar: "/professional-man-manager.jpg",
    availability: "Busy",
    skills: [
      { name: "Product Strategy", category: "Domain", proficiency: 92, targetProficiency: 95, trend: "up" },
      { name: "Data Analysis", category: "Technical", proficiency: 78, targetProficiency: 85, trend: "up" },
      { name: "Stakeholder Management", category: "Soft", proficiency: 88, targetProficiency: 90, trend: "stable" },
      { name: "Agile", category: "Domain", proficiency: 85, targetProficiency: 90, trend: "up" },
      { name: "Communication", category: "Soft", proficiency: 90, targetProficiency: 92, trend: "stable" },
      { name: "Team Leadership", category: "Leadership", proficiency: 82, targetProficiency: 88, trend: "up" },
    ],
  },
  {
    id: "3",
    name: "Taylor Swift",
    role: "UX Designer",
    department: "Design",
    avatar: "/professional-woman-designer.png",
    availability: "Available",
    skills: [
      { name: "Figma", category: "Technical", proficiency: 95, targetProficiency: 98, trend: "up" },
      { name: "User Research", category: "Domain", proficiency: 88, targetProficiency: 92, trend: "up" },
      { name: "Prototyping", category: "Technical", proficiency: 90, targetProficiency: 95, trend: "stable" },
      { name: "Communication", category: "Soft", proficiency: 85, targetProficiency: 88, trend: "up" },
      { name: "Design Systems", category: "Domain", proficiency: 82, targetProficiency: 90, trend: "up" },
      { name: "Collaboration", category: "Soft", proficiency: 88, targetProficiency: 90, trend: "stable" },
    ],
  },
  {
    id: "4",
    name: "Kanye West",
    role: "Data Scientist",
    department: "Data",
    avatar: "/professional-data-scientist.png",
    availability: "Available",
    skills: [
      { name: "Python", category: "Technical", proficiency: 92, targetProficiency: 95, trend: "up" },
      { name: "Machine Learning", category: "Technical", proficiency: 85, targetProficiency: 90, trend: "up" },
      { name: "SQL", category: "Technical", proficiency: 88, targetProficiency: 90, trend: "stable" },
      { name: "Data Visualization", category: "Technical", proficiency: 80, targetProficiency: 88, trend: "up" },
      { name: "Problem Solving", category: "Soft", proficiency: 90, targetProficiency: 92, trend: "stable" },
      { name: "Communication", category: "Soft", proficiency: 72, targetProficiency: 82, trend: "up" },
    ],
  },
  {
    id: "5",
    name: "Elon Musk",
    role: "DevOps Engineer",
    department: "Engineering",
    avatar: "/professional-woman-engineer.png",
    availability: "On Leave",
    skills: [
      { name: "AWS", category: "Technical", proficiency: 90, targetProficiency: 95, trend: "up" },
      { name: "Kubernetes", category: "Technical", proficiency: 85, targetProficiency: 92, trend: "up" },
      { name: "CI/CD", category: "Technical", proficiency: 88, targetProficiency: 92, trend: "stable" },
      { name: "Linux", category: "Technical", proficiency: 92, targetProficiency: 95, trend: "stable" },
      { name: "Problem Solving", category: "Soft", proficiency: 85, targetProficiency: 88, trend: "up" },
      { name: "Documentation", category: "Soft", proficiency: 75, targetProficiency: 85, trend: "up" },
    ],
  },
]

// Skill gaps for the team
export const skillGaps: SkillGap[] = [
  { skill: "Machine Learning", current: 45, required: 75, gap: 30, priority: "High" },
  { skill: "Cloud Architecture", current: 55, required: 80, gap: 25, priority: "High" },
  { skill: "Team Leadership", current: 60, required: 80, gap: 20, priority: "Medium" },
  { skill: "Data Visualization", current: 65, required: 80, gap: 15, priority: "Medium" },
  { skill: "Agile Methodology", current: 70, required: 85, gap: 15, priority: "Low" },
]

// Learning paths
export const learningPaths: LearningPath[] = [
  {
    id: "1",
    title: "Advanced React Patterns",
    description: "Master advanced React patterns including compound components, render props, and hooks optimization",
    duration: "4 weeks",
    skills: ["React", "TypeScript", "Performance"],
    progress: 65,
    status: "In Progress",
  },
  {
    id: "2",
    title: "Leadership Fundamentals",
    description: "Develop core leadership skills including communication, delegation, and team motivation",
    duration: "6 weeks",
    skills: ["Team Leadership", "Communication", "Stakeholder Management"],
    progress: 30,
    status: "In Progress",
  },
  {
    id: "3",
    title: "Cloud Architecture with AWS",
    description: "Learn to design and implement scalable cloud solutions on AWS",
    duration: "8 weeks",
    skills: ["AWS", "Cloud Architecture", "DevOps"],
    progress: 0,
    status: "Not Started",
  },
  {
    id: "4",
    title: "Data Science Essentials",
    description: "Build a foundation in data science with Python, statistics, and machine learning basics",
    duration: "10 weeks",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    progress: 100,
    status: "Completed",
  },
]

// Project matches
export const projectMatches: ProjectMatch[] = [
  {
    employeeId: "1",
    employeeName: "LeBron James",
    role: "Senior Developer",
    matchScore: 92,
    skillsMatched: ["React", "TypeScript", "Problem Solving"],
    skillsMissing: ["GraphQL"],
    availability: "Available",
    growthPotential: 85,
  },
  {
    employeeId: "4",
    employeeName: "Kanye West",
    role: "Data Scientist",
    matchScore: 88,
    skillsMatched: ["Python", "Data Analysis", "Problem Solving"],
    skillsMissing: ["React", "TypeScript"],
    availability: "Available",
    growthPotential: 92,
  },
  {
    employeeId: "3",
    employeeName: "Taylor Swift",
    role: "UX Designer",
    matchScore: 78,
    skillsMatched: ["Figma", "User Research", "Communication"],
    skillsMissing: ["React", "TypeScript"],
    availability: "Available",
    growthPotential: 70,
  },
  {
    employeeId: "2",
    employeeName: "Jackie Chan",
    role: "Product Manager",
    matchScore: 65,
    skillsMatched: ["Stakeholder Management", "Communication"],
    skillsMissing: ["React", "TypeScript", "Technical Skills"],
    availability: "Busy",
    growthPotential: 60,
  },
  {
    employeeId: "5",
    employeeName: "Elon Musk",
    role: "DevOps Engineer",
    matchScore: 72,
    skillsMatched: ["CI/CD", "Problem Solving"],
    skillsMissing: ["React", "Frontend"],
    availability: "On Leave",
    growthPotential: 75,
  },
]

// Team statistics
export const teamStats = {
  totalEmployees: 24,
  avgSkillLevel: 78,
  skillsTracked: 156,
  coursesCompleted: 42,
  internalMobility: 23,
  trainingROI: 340,
}
