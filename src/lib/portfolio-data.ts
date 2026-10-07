// ---------------------------------------------------------------------------
// EASY-TO-EDIT PLACEHOLDERS
// Replace the values below with your own details, assignments and text.
// ---------------------------------------------------------------------------

// Bundled with the app so it works on any host (Lovable, Vercel, etc.)
import photoUrl from "@/assets/pranitha.jpeg";

export const profile = {
  name: "Pranitha Shetty",
  className: "TE",
  rollNumber: "24101B0027",
  department: "INFT",
  college: "Vidyalankar Institute Of Technology",
  semester: "SEMESTER 5",
  email: "shettypranitha13@gmail.com",
  photo: photoUrl, // default profile photo (uploads override it locally)
  skills: [
    "Field Survey",
    "Data Analysis",
    "Report Writing",
    "Presentation",
    "Waste Audit",
    "Team Collaboration",
  ],
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
};

export const aboutText =
  "Hi my name is pranita";

export const reflectionText =
  "[Write your learning reflection here — describe how this course changed the way you see the environment, the activities you enjoyed most, the challenges you faced, and the habits you have adopted for a more sustainable lifestyle.]";

export const assignments = [
  {
    id: 1,
    title: "Pledge",
    description:
      "An environmental pledge taken as part of the Environmental Studies course, committing to sustainable habits and responsible use of resources.",
    date: "[DD Month YYYY]",
    viewUrl: "/pledge.pdf",
    pdfUrl: "/pledge.pdf",
  },
  {
    id: 2,
    title: "Crossword",
    description:
      "An E-Waste themed crossword activity exploring electronic waste, its hazards and responsible disposal practices.",
    date: "[DD Month YYYY]",
    viewUrl: "/crossword.pdf",
    pdfUrl: "/crossword.pdf",
  },
  {
    id: 3,
    title: "Quiz",
    description:
      "An online quiz on 'Recycling of E-waste' with 10 questions covering e-waste hazards, recycling processes and responsible disposal — scored 100% in the live attempt.",
    date: "[DD Month YYYY]",
    viewUrl: "/quiz.jpg",
    pdfUrl: "/quiz.jpg",
  },
  {
    id: 4,
    title: "C - Footprint Calculator",
    description:
      "A carbon footprint calculation activity measuring individual carbon emissions from daily habits and identifying ways to reduce them.",
    date: "[DD Month YYYY]",
    viewUrl: "/c-footprint.pdf",
    pdfUrl: "/c-footprint.pdf",
  },
  {
    id: 5,
    title: "Video Task",
    description:
      "A video-based assignment for the Environmental Studies course, submitted as part of the course activities.",
    date: "[DD Month YYYY]",
    viewUrl: "/video-task.jpg",
    pdfUrl: "/video-task.jpg",
  },
  ...Array.from({ length: 7 }, (_, i) => ({
    id: i + 6,
    title: `[Assignment ${i + 6} Title]`,
    description: "[Short description of the assignment, its objective and scope.]",
    date: "[DD Month YYYY]",
    viewUrl: "#",
    pdfUrl: "#",
  })),
];

export const stats = [
  { label: "Total Assignments", value: 12, suffix: "" },
  { label: "Topics Learned", value: 12, suffix: "" },
  { label: "Practical Activities", value: 8, suffix: "" },
  { label: "Projects Completed", value: 4, suffix: "" },
];
