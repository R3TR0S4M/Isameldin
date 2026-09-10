export type Project = {
  slug: string;
  code: string;
  title: string;
  label: string;
  summary: string;
  description: string;
  year: string;
  status: string;
  category: string;
  tags: string[];
  accent: string;
  external?: string;
};

export const profile = {
  name: 'Isameldin Ahmed',
  fullName: 'Isameldin Ahmed Hussein Ahmed',
  title: 'Mechatronics Engineering Graduate',
  location: 'Kuala Lumpur, Malaysia',
  email: 'eldeenisam@gmail.com',
  phone: '+60 11-3900 9572',
  linkedin: 'https://linkedin.com/in/isameldin',
  github: 'https://github.com/',
  website: 'https://isameldin.netlify.app',
  tagline: 'I build, automate, and improve the things around me.',
  intro: 'A passionate mechatronics engineering graduate with experience in mechanical design and IoT systems development, plus hands-on academic work in robotics, automation, embedded systems, and control. I enjoy turning a practical problem into a system that can be tested, understood, and improved.',
};

export const projects: Project[] = [
  { slug: 'fyp', code: 'FYP-01', title: 'EMG-Controlled Prosthetic Arm', label: 'FINAL YEAR PROJECT', summary: 'A modified HACKberry prosthetic arm with EMG control, haptic feedback, safety responses, and an online calibration dashboard.', description: 'Adapted the open-source HACKberry prosthetic arm design and modified it for muscle-signal control. The system uses an ESP32, sensor feedback, and a web dashboard for calibration and remote control. Project photos, diagrams, measured results, and the final specification sheet can be added to this case study later.', year: '2026', status: 'Final year project', category: 'Embedded Systems', tags: ['ESP32', 'EMG', 'Sensors', 'Dashboard'], accent: 'red' },
  { slug: 'gdp', code: 'GDP-02', title: 'Automated Guided Vehicle for Hospitals', label: 'GROUP DESIGN PROJECT', summary: 'A ROS-based autonomous ground vehicle designed to transport medical equipment using LiDAR, GPS, and camera-based machine vision.', description: 'Worked on an autonomous ground vehicle for medical equipment transport between hospitals. The system combined LiDAR, GPS, camera-based machine vision, ROS, an ESP32, and an NVIDIA Jetson Orin Nano. Project photos, architecture diagrams, and testing evidence can be added to this case study later.', year: '2026', status: 'Group design project', category: 'Robotics', tags: ['ROS', 'LiDAR', 'SolidWorks', 'Jetson'], accent: 'olive' },
  { slug: 'industrial-automation', code: 'PLC-03', title: 'Industrial Automation Systems', label: 'PLC / CONTROL LOGIC', summary: 'Two PLC-controlled systems covering conveyor movement, item sorting, sizing, and stamping sequences.', description: 'Contributed to two independent PLC-controlled systems using physical hardware and simulation. One moved objects between fixed conveyor positions. The other sorted items by size and stamped them using ladder logic.', year: 'Academic project', status: 'Completed academic work', category: 'Automation', tags: ['PLC', 'Ladder Logic', 'Conveyors', 'Simulation'], accent: 'khaki' },
  { slug: 'smart-city-health', code: 'IOT-04', title: 'Smart City Health Monitoring', label: 'IOT / MONITORING', summary: 'An academic IoT system for sensor data acquisition, remote monitoring, and pollution control concepts.', description: 'Developed an IoT smart city health monitoring system focused on collecting sensor data, supporting remote monitoring, and exploring pollution control responses.', year: 'Academic project', status: 'Completed academic work', category: 'Electronics', tags: ['IoT', 'Sensors', 'Monitoring'], accent: 'red' },
  { slug: 'robot-mapping', code: 'ROS-05', title: 'Robot Mapping and Navigation', label: 'ROS2 / ROBOTICS', summary: 'Practical work developing an understanding of ROS2 through robot mapping and navigation.', description: 'Worked with ROS2 concepts through robot mapping and navigation exercises. Add the specific robot platform, maps, screenshots, and results when the supporting material is ready.', year: 'Academic experience', status: 'Documentation slot', category: 'Robotics', tags: ['ROS2', 'Mapping', 'Navigation'], accent: 'olive' },
  { slug: 'train-scheduling', code: 'PY-06', title: 'Train Scheduling System', label: 'PYTHON / PROGRAMMING', summary: 'A Python scheduling system developed as part of additional academic programming experience.', description: 'Programmed a train scheduling system using Python. Add the scheduling logic, interface, and examples of the final system when the project files are available.', year: 'Academic experience', status: 'Documentation slot', category: 'Programming', tags: ['Python', 'Scheduling', 'Logic'], accent: 'khaki' },
  { slug: 'leave-management', code: 'C-07', title: 'Leave Management System', label: 'C / PROGRAMMING', summary: 'A C-based leave management system developed as additional academic programming experience.', description: 'Programmed a leave management system using C. Add the system flow, data model, and screenshots when the project files are available.', year: 'Academic experience', status: 'Documentation slot', category: 'Programming', tags: ['C', 'Data Structures', 'Systems'], accent: 'red' },
  { slug: 'solidworks-submarine', code: 'CAD-08', title: 'Submarine Design', label: 'SOLIDWORKS / CAD', summary: 'A SolidWorks mechanical design study focused on a submarine concept.', description: 'Designed a submarine using SolidWorks. Add the model views, design constraints, drawings, and rendering later.', year: 'Academic experience', status: 'Documentation slot', category: 'Mechanical Design', tags: ['SolidWorks', '3D CAD', 'Design'], accent: 'olive' },
  { slug: 'vacuum-pick-and-place', code: 'PLC-09', title: 'Electro-Pneumatic Pick and Place', label: 'OMRON PLC / AUTOMATION', summary: 'An electro-pneumatic vacuum pick-and-place device controlled with an Omron PLC.', description: 'Worked on an electro-pneumatic vacuum pick-and-place device using an Omron PLC. Add the pneumatic schematic, sequence logic, and machine photos later.', year: 'Academic experience', status: 'Documentation slot', category: 'Automation', tags: ['Omron PLC', 'Pneumatics', 'Pick and Place'], accent: 'khaki' },
  { slug: 'digital-circuits', code: 'ELEC-10', title: 'Digital and Analogue Circuit Studies', label: 'CIRCUIT DESIGN', summary: 'Circuit design work including an ALU controller and a BJT amplifier.', description: 'Constructed an ALU controller circuit for digital electronics and designed a BJT amplifier circuit for analogue electronics. Add circuit diagrams and measured waveforms later.', year: 'Academic experience', status: 'Documentation slot', category: 'Electronics', tags: ['Digital Circuits', 'Analogue Circuits', 'LTspice'], accent: 'red' },
  { slug: 'soft-drink-production', code: 'LABVIEW-11', title: 'Soft Drink Production System', label: 'LABVIEW / PROCESS', summary: 'A LabVIEW production-system study based on an automated soft drink process.', description: 'Designed a soft drink production system using LabVIEW. Add the process flow, HMI screenshots, and control logic later.', year: 'Academic experience', status: 'Documentation slot', category: 'Programming', tags: ['LabVIEW', 'Process Control', 'HMI'], accent: 'olive' },
];

export const experience = [
  { period: 'DEC 2022 - JUL 2026', role: 'Senior Engineering Technical Assistant', organization: 'Asia Pacific University', detail: 'Promoted to lead a team of lab assistants while supporting 20 to 50 students per semester across engineering lab sessions. Guided students with 3D printers, oscilloscopes, robotic arms, PLC units, and digital and analogue signal training kits.', tools: '3D Printing / Oscilloscopes / Robotic Arms / PLCs / Sensor Calibration' },
  { period: 'MAR - SEP 2026', role: 'Mechatronics Engineering Intern', organization: 'Ambani Consortium Group (M) Sdn. Bhd.', detail: 'Designed brackets and technical drawings for generator housings, tested an LTE module for remote generator monitoring and control, applied DFM and Poka-Yoke principles, and supported technical coordination and client engagement for the 2025 Invest Zambia International Conference.', tools: 'SolidWorks / LTE / IoT Monitoring / DFM / Poka-Yoke / ISO 9001, 14001, 45001' },
  { period: 'DEC 2024', role: 'Engineering Technical Assistant', organization: 'Asia Pacific University', detail: 'Maintained and repaired lab equipment, including 3D printers, oscilloscopes, robotic arms, PLC units, and Arduino kits. Supported 30 to 40 students per semester with sensor calibration and analogue circuit design while following lab safety procedures.', tools: 'Arduino / PLCs / Oscilloscopes / Lab Safety / Circuit Design' },
];

export const volunteering = [
  { period: 'AUG 2024 - MAY 2026', role: 'Head of Public Relations', organization: 'Institution of Mechanical Engineers, APU Student Section', detail: 'Led communications, built industry partnerships, invited speakers, spoke at events, and helped organize more than 20 workshops, competitions, and events.' },
];

export const education = [
  { period: 'JUN 2022 - JUN 2026', qualification: 'Bachelor of Mechatronic Engineering with Honours', institution: 'Asia Pacific University', detail: 'Dual DMU Degree Programme. Second Class Upper Division. De Montfort University, Leicester.' },
  { period: 'JAN 2020 - NOV 2021', qualification: 'A Levels', institution: 'LICEF School, Lusaka, Zambia', detail: 'Physics: A. Chemistry: B. Mathematics: B. High school valedictorian.' },
];

export const certificates = ['MATLAB Onramp', 'Simulink Onramp', 'Control Design Onramp with Simulink', 'Introduction to IoT', 'Python', 'C', 'Lean Six Sigma White Belt'];
export const skills = [
  { label: 'Programming and embedded systems', items: 'C, Python, MATLAB, Arduino, ESP32, machine vision, ROS2' },
  { label: 'Circuit design and CAD', items: 'Digital circuit design, SOLIDWORKS, Fusion 360, 2D engineering drawings, 3D printing' },
  { label: 'Automation and controls', items: 'PLC programming and control, stepper and servo motor control, sensor integration and calibration' },
  { label: 'Simulation and tools', items: 'Simulink, ABB RobotStudio, LabVIEW, Automation Studio, CX Programmer, LTspice, Multisim, Altair' },
];
export const awards = ['High School Valedictorian, LICEF Secondary School, Lusaka, Zambia', 'Al-Khayyam Mathematics Award, LICEF Secondary School, Lusaka, Zambia'];

export const fypSections = [
  ['Project overview', 'Adapted the open-source HACKberry prosthetic arm design and modified it to add EMG muscle-signal control for hand movement. The build combines an ESP32, sensor feedback, haptic vibration, safety responses, and an online dashboard.'],
  ['Problem statement', 'Create a more responsive prosthetic-arm control system that can translate muscle signals into hand movement while providing feedback and protecting the hardware from unsafe temperature and pressure conditions.'],
  ['Objectives', 'Add EMG-based hand control, improve signal quality through analogue front-end conditioning and digital signal processing, provide temperature and pressure feedback, and support calibration and remote control through a web dashboard.'],
  ['My role and responsibilities', 'Adapted and 3D-printed the HACKberry design, modified the arm, integrated the ESP32 and sensors, developed the control and dashboard functions, and tested and improved the muscle-signal response.'],
  ['System design', 'The system combines EMG input, signal conditioning, digital processing, ESP32 control, hand actuation, thermistors, pressure sensors, vibration feedback, and an online dashboard. Add the final architecture diagram in the visual slot.'],
  ['Methodology', 'Collected and filtered EMG input, tested the control response, integrated safety feedback, and iterated on the arm and sensor setup. The dashboard also supports user-specific machine-learning model training from collected input data.'],
  ['Hardware and software', 'HACKberry prosthetic-arm design, 3D-printed parts, ESP32 microcontroller, EMG input, thermistors, pressure sensors, vibration feedback, analogue signal conditioning, digital signal processing, and a web-based dashboard.'],
  ['Technical specifications', 'Add verified measurements later, including dimensions, actuator details, operating ranges, sampling settings, power requirements, movement accuracy, and sensor thresholds.'],
  ['Development process', 'Started from an open-source arm design, modified the mechanical structure, integrated control electronics and sensing, connected the dashboard, and refined the control response through testing.'],
  ['Testing and results', 'Tested and improved the EMG control for reliable and accurate movement. Add test data, plots, photos, and measured performance results when ready.'],
  ['Challenges and solutions', 'Signal quality, sensor calibration, mechanical integration, and safe response behavior were treated as connected system problems. Add the specific design changes and evidence later.'],
  ['Key achievements', 'Delivered a modified 3D-printed HACKberry arm with EMG control, temperature and pressure sensing, vibration feedback, automated safety responses, and an online control dashboard.'],
  ['Lessons learned', 'Add the technical and project lessons that came from integrating mechanical design, analogue signals, embedded control, sensing, and user-facing software.'],
  ['Future improvements', 'Add the next improvements for comfort, repeatability, signal robustness, calibration, mechanical refinement, and user testing.'],
];

export const gdpSections = [
  ['Project overview', 'Developed a ROS-based autonomous ground vehicle for transporting medical equipment between hospitals. The platform combines LiDAR, GPS, camera-based machine vision, an ESP32, and an NVIDIA Jetson Orin Nano.'],
  ['Problem statement', 'Design an autonomous vehicle concept that can move medical equipment through a hospital environment while coordinating navigation, sensing, mechanical structure, and control.'],
  ['Objectives', 'Develop autonomous navigation, integrate multiple sensing modes, design a practical chassis and sensor mounts, and connect the sensor systems with the navigation logic.'],
  ['Team members', 'Add the names, roles, and responsibilities of the group members when the final project record is ready.'],
  ['My individual contribution', 'Designed the vehicle chassis and sensor mounts in SolidWorks and helped integrate the sensor systems with the navigation logic.'],
  ['System architecture', 'The vehicle uses LiDAR, GPS, and camera-based machine vision for navigation, with ROS coordinating the system and an ESP32 and NVIDIA Jetson Orin Nano supporting the vehicle and navigation logic. Add the final architecture diagram in the visual slot.'],
  ['Design process', 'Worked within a team design process that connected mechanical design, sensing, navigation, and integration. Add concept sketches, design reviews, and iteration evidence later.'],
  ['Hardware and software', 'ROS, LiDAR, GPS, camera-based machine vision, ESP32, NVIDIA Jetson Orin Nano, and SolidWorks.'],
  ['Technical specifications', 'Add verified chassis dimensions, payload targets, sensing ranges, localization details, speed, power requirements, and navigation performance later.'],
  ['Testing and results', 'Add navigation tests, sensor integration results, mapping or route evidence, and the limitations observed during testing.'],
  ['Challenges and solutions', 'Describe the integration challenges between sensing, navigation, chassis design, and the work of different team members.'],
  ['Key achievements', 'Contributed a designed chassis and sensor-mount system to a multi-sensor autonomous medical-equipment transport vehicle.'],
  ['Lessons learned', 'Add lessons about system architecture, interface ownership, team integration, and designing a vehicle around sensing requirements.'],
  ['Future improvements', 'Add improvements for hospital safety, obstacle handling, localization, payload handling, route planning, and real-world validation.'],
];
