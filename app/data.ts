type Project = {
  name: string
  description: string
  link: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}


type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Thriftbooks.com E2E Capstone',
    description:'End-to-end testing documentation showcasing an automation-first QA approach, including detailed test plans, coverage strategy, defect logs, and Page Object Model structure',
    link: 'https://github.com/Jasminev71/ThriftBooks-testing/wiki',
    id: 'project1',
  },
  {
    name: 'Client Management Service ',
    description: 'Backend service built in Java demonstrating CRUD operations, layered architecture, input validation, and unit testing. Focused on clean service design, data integrity, and scalable business logic implementation.',
    link: 'https://github.com/Jasminev71/Client-Management-Service/wiki',
    id: 'project2'
  },
   {
    name: 'Weight Buddy',
    description: 'Android mobile application built in Java that allows users to log and manage weight entries. Enhanced with input validation and aggregation logic to improve data integrity and algorithmic processing.',
    link: 'https://github.com/Jasminev71/WeightBuddy/wiki/Algorithms-&-Data-Structures',
    id: 'project3',
  },
   {
    name: 'Weight Buddy- Database',
    description: 'Refactored SQLite schema and queries to improve data validation, indexing, and reliability. Focused on strengthening database design, scalability, and data integrity within a mobile application environment.',
    link: 'https://github.com/Jasminev71/WeightBuddy/wiki/Database-Enhancements',
    id: 'project4',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'GOLDpoint Systems',
    title: 'QA Engineer',
    start: '2026',
    end: 'Present',
    link: 'https://www.goldpointsystems.com',
    id: 'work1',
  },
]



export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Jasminev71',
  },
 
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jasmine-villarreal-qa/',
  },
 
]

export const EMAIL = 'jasminevillarreal71@gmail.com'
