// ---------------------------------------------------------------------------
// EASY-TO-EDIT PLACEHOLDERS
// Replace the values below with your own details, assignments and text.
// ---------------------------------------------------------------------------

import photoAsset from "@/assets/pranitha.jpeg.asset.json";

export const profile = {
  name: "Pranitha Shetty",
  className: "TE",
  rollNumber: "24101B0027",
  department: "INFT",
  college: "Vidyalankar Institute Of Technology",
  semester: "SEMESTER 5",
  email: "shettypranitha13@gmail.com",
  photo: "", // put an image URL or import path here
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
  "[Write about yourself here — your background, why Environmental Studies matters to you, what you have learned during the course, and how you plan to apply this knowledge in your academic and professional journey.]";

export const reflectionText =
  "[Write your learning reflection here — describe how this course changed the way you see the environment, the activities you enjoyed most, the challenges you faced, and the habits you have adopted for a more sustainable lifestyle.]";

export const assignments = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `[Assignment ${i + 1} Title]`,
  description: "[Short description of the assignment, its objective and scope.]",
  date: "[DD Month YYYY]",
  viewUrl: "#",
  pdfUrl: "#",
}));

export const stats = [
  { label: "Total Assignments", value: 12, suffix: "" },
  { label: "Topics Learned", value: 12, suffix: "" },
  { label: "Practical Activities", value: 8, suffix: "" },
  { label: "Projects Completed", value: 4, suffix: "" },
];
