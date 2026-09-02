export const profile = {
  name: "Vijayalakshmi B",
  title: "Entry-Level Cloud / DevOps Engineer",
  tagline: "AWS | Azure | Linux | Networking | DevOps",
  email: "vijayalakshmib741@gmail.com",
  phone: "+91 9344045676",

  linkedin: "https://www.linkedin.com/in/vijayalakshmi-b-b55639271",

  github: "https://github.com/vijayalakshmi2802",

  leetcode: "https://leetcode.com/u/vijayalakshmi_b28/",

  resume: "/vijayalakshmi-resume.pdf",
};


export const skills = {
  cloud: [
    "AWS",
    "Microsoft Azure",
  ],

  aws: [
    "EC2",
    "VPC",
    "IAM",
    "S3",
    "ELB",
    "Auto Scaling",
    "CloudWatch",
    "Route 53",
    "EBS",
    "Security Groups",
  ],

  azure: [
    "Virtual Machines",
    "VNet",
    "Subnets",
    "NSG",
    "Load Balancer",
    "Storage Account",
    "RBAC",
    "Entra ID",
    "Azure Monitor",
    "Azure CLI",
  ],

  devops: [
    "Git",
    "GitHub",
    "Linux",
    "CI/CD",
    "Docker",
    "Jenkins",
    "Terraform",
    "Kubernetes",
  ],

  networking: [
    "TCP/IP",
    "DNS",
    "DHCP",
    "HTTP/HTTPS",
    "SSH",
    "VPN",
    "Routing",
    "Subnetting",
  ],

  programming: [
    "Python",
    "Java",
    "SQL",
  ],

  automation: [
    "ARM Templates",
    "AWS CloudFormation",
    "Azure CLI",
  ],
};


export const projects = [
  {
    title: "Enterprise High Availability Infrastructure",
    category: "Microsoft Azure",

    technologies: [
      "Azure VM",
      "VNet",
      "NSG",
      "Load Balancer",
      "Azure Monitor",
      "ARM Templates",
      "Azure CLI",
    ],

    description:
      "Designed and deployed a highly available Azure infrastructure using Virtual Machines and Load Balancer.",

    points: [
      "Configured VNet, subnets, NSGs and Storage Accounts for secure resource deployment.",
      "Automated infrastructure deployment using ARM Templates and Azure CLI.",
      "Configured monitoring and alerts using Azure Monitor.",
    ],

    github: "https://github.com/vijayalakshmi2802",
  },

  {
    title: "Highly Available Web Application Infrastructure",
    category: "Amazon Web Services",

    technologies: [
      "EC2",
      "VPC",
      "IAM",
      "S3",
      "ELB",
      "Auto Scaling",
      "Route 53",
      "CloudWatch",
    ],

    description:
      "Designed a scalable AWS infrastructure for highly available web application hosting.",

    points: [
      "Configured EC2, VPC and Auto Scaling for scalable infrastructure.",
      "Implemented IAM policies and Security Groups for secure application hosting.",
      "Configured Elastic Load Balancer and CloudWatch monitoring.",
      "Managed application storage using Amazon S3.",
    ],

    github: "https://github.com/vijayalakshmi2802",
  },

  {
    title: "Multi-Cloud Infrastructure Automation & Monitoring",
    category: "AWS + Microsoft Azure",

    technologies: [
      "Azure CLI",
      "ARM Templates",
      "Azure Monitor",
      "AWS CloudWatch",
      "Linux",
      "Git",
    ],

    description:
      "Worked with multi-cloud infrastructure automation, monitoring and Linux administration.",

    points: [
      "Automated Azure resource deployment using ARM Templates.",
      "Managed Azure resources through Azure CLI.",
      "Configured monitoring dashboards and alerts using Azure Monitor and AWS CloudWatch.",
      "Performed Linux administration and infrastructure troubleshooting.",
    ],

    github: "https://github.com/vijayalakshmi2802",
  },
];


export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science and Engineering",
  college: "Sri Venkateshwaraa College of Engineering and Technology",
  duration: "2021 - 2025",
  cgpa: "8.6 / 10",
};


export const certifications = [
  "AWS Academy Cloud Certification",
  "AICTE AWS Cloud Virtual Internship",
  "HackerRank Python Certificate",
  "NIELIT - Machine Learning using Python",
  "NASSCOM - Generative AI",
];


export const devopsLearning = [
  {
    title: "Version Control",
    items: ["Git", "GitHub", "Branching", "Pull Requests"],
  },

  {
    title: "CI/CD",
    items: [
      "CI/CD Fundamentals",
      "GitHub Actions",
      "Jenkins",
      "Build & Deployment",
    ],
  },

  {
    title: "Containers",
    items: [
      "Docker",
      "Docker Images",
      "Containers",
      "Dockerfiles",
    ],
  },

  {
    title: "Infrastructure",
    items: [
      "Terraform",
      "Infrastructure as Code",
      "AWS",
      "Azure",
    ],
  },

  {
    title: "Orchestration",
    items: [
      "Kubernetes Fundamentals",
      "Pods",
      "Deployments",
      "Services",
    ],
  },
];


export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "DevOps", href: "#devops" },
  { label: "Contact", href: "#contact" },
];