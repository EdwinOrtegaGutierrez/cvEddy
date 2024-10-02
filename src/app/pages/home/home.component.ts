import { Component } from '@angular/core';
import { HeadContainerComponent } from "../../components/head-container/head-container.component";
import { DescriptionComponent } from "../../components/description/description.component";
import { Education, WorkExperiences } from '../../model/dataModel';
import { FooterContainerComponent } from "../../components/footer-container/footer-container.component";

@Component({
  selector: 'page-home',
  standalone: true,
  imports: [HeadContainerComponent, DescriptionComponent, FooterContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  workExperiences: WorkExperiences[] = [
    {
      title: 'FullStack Developer - Grupo Huerta Lynx',
      subtitle: 'Dsanro Consulting - Home Office',
      date: 'January 2024 - Present',
      data: [
        'Frontend development with: NextJS',
        'Backend development with: C# (.NET)',
        'Database: Hana SQL (SAP)',
        'Database middleware: MySQL'
      ]
    },
    {
      title: 'FullStack Developer - Modumex & Saftu',
      subtitle: 'iTree',
      date: 'June 2023 - January 2024',
      data: [
        'Backend and microservices with: C# (.NET)',
        'API REST development with: Java',
        'Database: Hana SQL (SAP)',
        'FullStack with: Liferay',
        'Components: React and Angular'
      ]
    },
    {
      title: 'FullStack Developer - Agricos Project',
      subtitle: 'Getinsoft',
      date: 'January 2022 - January 2023',
      data: [
        'Angular development',
        'C# development',
        'Application deployment in Docker',
        'Creation of REST APIs'
      ]
    },
    {
      title: 'Test Technician - Power System Project',
      subtitle: 'IBM',
      date: 'January 2023 - June 2023',
      data: [
        'Server testing',
        'Debugging',
        'Network connections application',
        'Internal computer architecture',
        'Linux application'
      ]
    },
    {
      title: 'Software Engineer - Mars Rover Project',
      subtitle: 'UdeG Space, CUCEI',
      date: 'August 2022 - Present',
      data: [
        'Python application',
        'Docker',
        'C# (.NET)',
        'Angular',
        'ROS (Robot Operating System) application',
        'Point clouds',
        'Computer vision',
        'ArUco code reading',
        'Machine Learning'
      ]
    }
  ];
  
  aboutMeImages:string[] = [
    '/images/edwin2.jpg',
    '/images/edwin3.jpg',
  ];

  education: Education[] = [
    {
      title: 'Bachelor’s Degree in Computer Sciences',
      subtitle: 'Tonalá University Center UDG',
      date: 'January 2021 - Present',
      image: '/images/cutonala.jpg'
    }
  ];

  widgets:any[] = [
    {
      image:'/icons/Python.png',
      name:'Python'
    },
    {
      image:'/icons/Docker.png',
      name:'Docker'
    },
    {
      image:'/icons/Csharp.png',
      name:'C#'
    },
    {
      image:'/icons/Angular.png',
      name:'Angular'
    },
    {
      image:'/icons/ROS.png',
      name:'ROS'
    },
    {
      image:'/icons/ML.png',
      name:'Machine Learning'
    },
    {
      image:'/icons/React.png',
      name:'React'
    },
    {
      image:'/icons/Next.js.png',
      name:'NextJS'
    },
    {
      image:'/icons/Java.png',
      name:'Java'
    },
    {
      image:'/icons/TypeScript.png',
      name:'TypeScript'
    },
    {
      image:'/icons/SQL.png',
      name:'SQL'
    },
    {
      image:'/icons/Dot_Net.png',
      name:'.NET'
    },
    {
      image:'/icons/Liferay.png',
      name:'Liferay'
    },
    {
      image:'/icons/SAP.png',
      name:'SAP - Hana SQL'
    },
  ];
  languages:any[] = [
    {
      image:'/icons/Español.png',
      name:'Español'
    },
    {
      image:'/icons/English.png',
      name:'English'
    },
    {
      image:'/icons/Français.png',
      name:'Français'
    },
  ];
  badges:any[] = [
    {
      title:'Python for Data Science',
      subtitle:'The badge earner can write Python scripts and perform basic data analysis in IBM’s Jupyter-based environment.',
      date:'December 01, 2021',
      link:'https://www.credly.com/badges/6257d3d1-7c31-4ec1-bb47-a544b08861c3/public_url',
      image:'/images/PythonDS.png',
    },
    {
      title:'Data Analysis Using Python',
      subtitle:'The badge earner can analyze data in Python using arrays, DataFrames, SciPy, and scikit-learn, demonstrated in JupyterLab.',
      date:'February 10, 2022',
      link:'https://www.credly.com/badges/38a49176-8d41-43a4-b30a-3ec88f3474eb/public_url',
      image:'/images/DataAnalysis.png',
    },
    {
      title:'Data Visualization Using Python',
      subtitle:'Can use libraries like Matplotlib, Seaborn, and Folium to create and customize data visualizations.',
      date:'February 27, 2022',
      link:'https://www.credly.com/badges/1d79f694-f572-4589-a527-9517740781ea/public_url',
      image:'/images/DataVisualization.png',
    },
    {
      title:'Applied Data Science with Python - Level 2',
      subtitle:'Code in Python for data science, analyzing and visualizing data using python libraries.',
      date:'February 27, 2022',
      link:'https://www.credly.com/badges/f70c4776-69ef-4e19-9bc3-5c9356dc1097/public_url',
      image:'/images/AppliedDS.png',
    },
  ];
  projects:any[] = [
    {
      title:'SIC - Face detection',
      subtitle:'Facial detection (with AI) for the security of a company or entity.',
      date:'December 18, 2023',
      link:'https://github.com/EdwinOrtegaGutierrez/SIC',
      image:'/images/SIC.jpg',
    },
    {
      title:'Dawa - Lenguage and IDE',
      subtitle:'Custom programming language and IDE.',
      date:'February 12, 2023',
      link:'https://github.com/EdwinOrtegaGutierrez/Dawa',
      image:'/images/Dawa.jpg',
    },
    {
      title:'Grayscale IA',
      subtitle:'AI project for processing grayscale images.',
      date:'January 29, 2023',
      link:'https://github.com/EdwinOrtegaGutierrez/grayscale_IA',
      image:'/images/grayscale.jpg',
    },
    {
      title:'Sample Reduction',
      subtitle:'Sample reduction project for data optimization.',
      date:'February 26, 2023',
      link:'https://github.com/EdwinOrtegaGutierrez/sample_reduction',
      image:'/images/sample_reduction.jpg',
    },
    {
      title:'MusicOS',
      subtitle:'Online music store.',
      date:'January 29, 2023',
      link:'https://github.com/EdwinOrtegaGutierrez/MusicOS',
      image:'/images/musicos.jpg',
    },
  ];
}
