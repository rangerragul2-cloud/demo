const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const Service = require('../models/Service');
const Portfolio = require('../models/Portfolio');
const Career = require('../models/Career');
const Client = require('../models/Client');
const Admin = require('../models/Admin');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bradman-tech');

const seedServices = [
  {
    title: 'Graphic Design',
    whyService: 'Visual communication that captures attention and drives engagement',
    whyBradman: 'Our creative team brings your brand vision to life with stunning designs',
    deliverables: ['Logo Design', 'Posters', 'Infographics', 'Social Media Creatives']
  },
  {
    title: 'Web Design & Development',
    whyService: 'Essential digital presence that converts visitors into customers',
    whyBradman: 'Full-stack expertise with modern frameworks and responsive design',
    deliverables: ['Corporate Websites', 'E-commerce Platforms', 'UI/UX Design', 'Mobile Apps']
  },
  {
    title: '2D & 3D Animation',
    whyService: 'Dynamic content that engages audiences and explains complex concepts',
    whyBradman: 'Professional animators with cutting-edge tools and techniques',
    deliverables: ['2D/3D Animation', 'Logo Reveals', '3D Modeling', 'Motion Graphics']
  }
];

const seedPortfolio = [
  {
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Web Design',
    description: 'Modern E-commerce Platform',
    client: 'TechCorp',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Branding',
    description: 'Corporate Identity Design',
    client: 'InnovateAI',
    technologies: ['Photoshop', 'Illustrator']
  }
];

const seedCareers = [
  {
    role: 'Full Stack Developer',
    department: 'Software Development',
    description: 'Join our development team to build cutting-edge web applications',
    requirements: ['3+ years React experience', 'Node.js proficiency', 'MongoDB knowledge'],
    responsibilities: ['Develop full-stack applications', 'Code reviews', 'Mentoring junior developers'],
    location: 'Remote / On-site',
    jobType: 'Full-time',
    howToApply: 'Send your resume to careers@bradmantech.com'
  }
];

const seedClients = [
  {
    name: 'Sarah Johnson',
    logo: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=300',
    feedback: 'Bradman Technologies transformed our digital presence completely. Their team\'s expertise exceeded our expectations.',
    rating: 5,
    role: 'CEO',
    company: 'TechCorp',
    image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

async function seedDatabase() {
  try {
    // Clear existing data
    await Service.deleteMany({});
    await Portfolio.deleteMany({});
    await Career.deleteMany({});
    await Client.deleteMany({});
    await Admin.deleteMany({});

    // Insert seed data
    await Service.insertMany(seedServices);
    await Portfolio.insertMany(seedPortfolio);
    await Career.insertMany(seedCareers);
    await Client.insertMany(seedClients);

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12);
    await Admin.create({
      username: 'admin',
      email: 'admin@bradmantech.com',
      password: adminPassword,
      role: 'super-admin',
      permissions: ['services', 'portfolio', 'careers', 'clients', 'messages', 'users']
    });

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seedDatabase();