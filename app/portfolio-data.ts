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
  image?: string;
  gallery?: string[];
  galleryItems?: GalleryItem[];
  external?: string;
};

export type GalleryItem = {
  image: string;
  code: string;
  title: string;
  label: string;
  description: string;
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
  { slug: 'fyp', code: 'FYP-01', title: 'EMG-Controlled Prosthetic Arm', label: 'FINAL YEAR PROJECT', summary: 'A 3D-printed HACKberry prosthetic arm with EMG control, sensory feedback, safety responses, and an ESP32-based control system.', description: 'Developed a modified HACKberry prosthetic arm controlled by surface EMG signals. The Phase 2 system combines an ESP32, servo-driven movement, thermistor and piezoelectric sensing, vibration feedback, safety responses, and a web-based calibration dashboard.', year: '2026', status: 'Final year project', category: 'Embedded Systems', tags: ['ESP32', 'EMG', 'Sensors', 'Dashboard'], accent: 'red', image: '/images/projects/fyp/hackberry-platform.jpg', gallery: ['/images/projects/fyp-prosthetic-arm.jpg', '/images/projects/fyp-assembly.jpg', '/images/projects/fyp-testing.jpg'], galleryItems: [
    { image: '/images/projects/fyp/hackberry-platform.jpg', code: 'FYP-02', title: 'HACKberry arm platform', label: 'REFERENCE PLATFORM', description: 'The open-source HACKberry arm provided the mechanical starting point for the project. Its platform was adapted with added wrist and elbow movement, EMG control, and sensory feedback.' },
    { image: '/images/projects/fyp/cad-side-view.png', code: 'FYP-03', title: 'Modified prosthetic arm CAD', label: 'MECHANICAL DESIGN', description: 'This side view shows the adapted hand, wrist interface, and forearm casing arranged around the servo-driven mechanism, wiring, and embedded electronics.' },
    { image: '/images/projects/fyp/system-architecture.png', code: 'FYP-04', title: 'Updated system architecture', label: 'SYSTEM ARCHITECTURE', description: 'This diagram follows the signal path from muscle input and single-channel EMG acquisition into ESP32 sampling, signal processing, classification, control, sensing, calibration, actuation, and vibration feedback.' },
    { image: '/images/projects/fyp/emg-dashboard.png', code: 'FYP-05', title: 'EMGARM calibration dashboard', label: 'SOFTWARE INTERFACE', description: 'The dashboard brings the live EMG envelope, pulse features, curve shape, calibration values, and training states into one workspace for configuring prosthetic gestures.' },
    { image: '/images/projects/fyp/emg-test.png', code: 'FYP-06', title: 'Live EMG signal test', label: 'EXPERIMENTAL TESTING', description: 'Surface EMG electrodes are connected during a live test while muscle activation data is streamed to the dashboard for signal inspection and gesture classification.' },
    { image: '/images/projects/fyp/prototype.jpg', code: 'FYP-07', title: 'Integrated physical prototype', label: 'SYSTEM INTEGRATION', description: 'The assembled 3D-printed prototype shows the hand, forearm casing, wrist module, and embedded hardware together during system integration.' },
    { image: '/images/projects/fyp/distance-response.png', code: 'FYP-08', title: 'Distance response results', label: 'RESULTS / VALIDATION', description: 'This plot records the measured thumb-index distance across 30 trials, giving a direct visual record of the prosthetic movement response during testing.' },
  ] },
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
  { period: 'MAR - SEP 2026', role: 'Mechatronics Engineering Intern', organization: 'Ambani Consortium Group (M) Sdn. Bhd.', detail: 'Designed brackets and technical drawings for generator housings, tested an LTE module for remote generator monitoring and control, applied DFM and Poka-Yoke principles, and supported technical coordination and client engagement for the 2025 Invest Zambia International Conference.', tools: 'SolidWorks / LTE / IoT Monitoring / DFM / Poka-Yoke / ISO 9001, 14001, 45001', image: '/images/experience/internship-team.jpg' },
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
  ['Problem statement', 'Many prosthetic arms remain out of reach for people who need them because of high purchase, maintenance, and rehabilitation costs. Lower-cost alternatives often provide limited movement and little or no sensory feedback, reducing their usefulness in daily activities.'],
  ['Aim', 'Develop a 3D-printed prosthetic arm controlled by electromyography signals that also provides environmental feedback through integrated sensors.'],
  ['Objectives', 'Process EMG signals to control the five fingers, palm, and elbow with a target accuracy of at least 70%. Develop feedback for surface roughness and temperature. Adapt an existing arm into a low-cost 3D-printed system using accessible components. Evaluate movement accuracy, feedback performance, and task success during simple daily activities.'],
  ['Research justification', 'The project combines 3D printing, embedded control, and sensory feedback to explore a more affordable and adaptable assistive device. Personalised EMG calibration is intended to make the system more intuitive for the user while reducing dependence on expensive proprietary hardware.'],
  ['My role and responsibilities', 'Adapted and 3D-printed the HACKberry design, modified the arm, integrated the ESP32 and sensors, developed the control and dashboard functions, and tested and improved the muscle-signal response.'],
  ['System design', 'The ESP32 acts as the central controller for single-channel EMG acquisition, signal conditioning, feature extraction, movement classification, actuator control, and sensor data. A Wi-Fi dashboard supports calibration, while piezoelectric sensing, a vibration motor, and a thermistor provide texture feedback and heat protection.'],
  ['Methodology', 'The work followed a design, build, calibrate, test, and refine cycle. EMG signals were filtered, rectified, smoothed, and mapped to movement thresholds. The mechanical system, actuator mounts, sensing hardware, and dashboard were then integrated and evaluated as one standalone prototype.'],
  ['Design changes', 'The final design uses a single EMG channel to reduce setup complexity and processing load. User-specific calibration values are stored in the ESP32 non-volatile memory. An active wrist mechanism and integrated elbow structure were added to improve movement range and load distribution.'],
  ['Hardware and software', 'HACKberry prosthetic-arm design, 3D-printed parts, ESP32 microcontroller, EMG input, thermistors, pressure sensors, vibration feedback, analogue signal conditioning, digital signal processing, and a web-based dashboard.'],
  ['Technical specifications', 'The prototype uses seven servo motors for actuation, an ESP32 for embedded processing, surface EMG electrodes, PLA and PETG printed parts, a piezoelectric sensor, an NTC thermistor, and a vibration motor. The report estimates the component cost at RM546.'],
  ['Development process', 'Started from an open-source arm design, modified the mechanical structure, integrated control electronics and sensing, connected the dashboard, and refined the control response through testing.'],
  ['Testing and results', 'Testing covered EMG-to-distance mapping, servo response latency, power consumption, grip repeatability, and piezoelectric texture sensing. The report records control accuracy above 90% across the tested EMG states, an internal response latency of 20 to 68 ms, and fingertip gaps from 1.5 to 2.4 mm across five repeated grips.'],
  ['Challenges and solutions', 'Signal noise was reduced with high-pass, notch, and low-pass filtering, followed by user calibration. Mechanical backlash and printed-part alignment were addressed through servo calibration, tendon adjustment, and reinforced components. Sensor vibration was reduced through improved mounting and more consistent contact pressure.'],
  ['Key achievements', 'Delivered a standalone ESP32-based prototype with seven controllable degrees of freedom across the fingers, wrist, and elbow. The system combines personalised EMG control, web calibration, texture feedback, heat protection, vibration feedback, and local storage of user parameters.'],
  ['Sustainability and accessibility', 'The design uses open-source foundations, additive manufacturing, modular parts, and commercially available electronics to support repair and adaptation. Its low estimated component cost is intended to reduce barriers to assistive technology, while the report also recognises the need to manage electronic waste and design for disassembly.'],
  ['Limitations', 'The single-channel EMG system limits simultaneous movement commands and requires recalibration for different users. Texture sensing can be affected by mounting position and vibration. Validation was completed in a controlled setting with a limited user cohort, so long-term wear and wider clinical performance still require study.'],
  ['Lessons learned', 'The project required mechanical design, analogue signal conditioning, embedded programming, sensor integration, control logic, and user-facing software to work together. It reinforced the importance of calibration, repeatable testing, safe limits, and designing around real user variability.'],
  ['Future improvements', 'Future work should investigate multi-channel EMG with richer classification, closed-loop grip-force sensing, lighter actuators, improved power management, and broader trials with clinical representatives and diverse users.'],
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
