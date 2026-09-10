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
  { slug: 'gdp', code: 'GDP-02', title: 'Automated Guided Vehicle for Hospitals', label: 'GROUP DESIGN PROJECT', summary: 'A hospital logistics AGV designed to transport medical supplies and biohazard waste using ROS2 navigation, LiDAR, camera sensing, and a modular aluminium chassis.', description: 'Designed the AGV chassis and navigation hardware for a hospital logistics vehicle intended to carry medical supplies and biohazard waste. The report documents the SolidWorks chassis, suspension and sensor brackets, ROS2 navigation approach, LiDAR and camera integration, and Jetson and ESP32 control hardware.', year: '2026', status: 'Group design project', category: 'Robotics', tags: ['ROS2', 'LiDAR', 'SolidWorks', 'Jetson'], accent: 'olive', image: '/images/projects/gdp/agv-cover-platform.jpg', galleryItems: [
    { image: '/images/projects/gdp/chassis-frame.jpg', code: 'GDP-03', title: 'Fabricated AGV chassis frame', label: 'MECHANICAL STRUCTURE', description: 'The fabricated chassis uses aluminium extrusion to create a stable 120 cm by 100 cm platform for the drive system, payload area, batteries, and navigation hardware.' },
    { image: '/images/projects/gdp/initial-frame-build.jpg', code: 'GDP-04', title: 'Initial frame build', label: 'PROTOTYPE ASSEMBLY', description: 'The first frame build translates the SolidWorks concept into a physical platform and establishes the mounting points used during later integration.' },
    { image: '/images/projects/gdp/lighting-assembly.jpg', code: 'GDP-05', title: 'Front lighting and sensor hardware', label: 'HARDWARE INTEGRATION', description: 'The front assembly shows the lighting module and sensor support hardware mounted to the aluminium frame for operation in indoor hospital environments.' },
    { image: '/images/projects/gdp/suspension-bracket.jpg', code: 'GDP-06', title: 'Suspension bracket implementation', label: 'FABRICATION DETAIL', description: 'The custom bracket secures the suspension strut to the 45 by 45 mm extrusion. The report describes PLA+ fabrication, M6 fasteners, and alignment for load transfer during motion.' },
    { image: '/images/projects/gdp/lidar-bracket.jpg', code: 'GDP-07', title: 'LiDAR mounting solution', label: 'NAVIGATION HARDWARE', description: 'The custom LiDAR mount positions the Unitree 4D LiDAR above the chassis for a clear scanning view while preserving space for the camera and other front-mounted hardware.' },
    { image: '/images/projects/gdp/gazebo-simulation.jpg', code: 'GDP-08', title: 'Gazebo navigation simulation', label: 'ROS2 VALIDATION', description: 'The Gazebo environment tests the navigation stack around static warehouse-style obstacles, using sensor data with global and local path planning before real-world deployment.' },
    { image: '/images/projects/gdp/electronics-layout.jpg', code: 'GDP-09', title: 'Integrated electronics layout', label: 'SYSTEM INTEGRATION', description: 'The top-down view records the placement of the battery, motor hubs, emergency stop, wiring, and LiDAR on the completed platform to support balanced integration and cable management.' },
  ] },
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
  ['Project overview', 'The project develops a smart automated guided vehicle for hospital logistics. Its intended use is the secure transport of medical supplies and biohazard waste while reducing manual handling and supporting safer movement through hospital environments.'],
  ['Problem statement', 'Hospital staff spend significant time moving food, medicine, equipment, and waste. Manual transport creates physical strain, takes staff away from patient care, can introduce delivery errors, and becomes harder to scale across larger hospital buildings. The report identifies autonomous guided vehicles as a way to support logistics while maintaining safety around people and obstacles.'],
  ['Aim and objectives', 'The aim is to design and build a working prototype of a smart AGV for secure hospital transport. The objectives are to develop autonomous navigation, implement secure dual-payload compartments using RFID authentication, design an automatic obstacle-stop safety system, and test the AGV implementation.'],
  ['Team members', 'The report credits Ayser Amir Kamil Mohamed, Badr Bassam Hassan Albdulmajeed, Isameldin Ahmed Hussein Ahmed, and Rayan Khalid Mubarak Al Yaquobi, under the supervision of Dr. Sathish Kumar Selvaperumal.'],
  ['My individual contribution', 'Isameldin Ahmed focused on the AGV design and navigation section. This included SolidWorks schematics for the chassis, suspension bracket, LiDAR mount, and camera mount, together with the ROS2-based navigation approach using LiDAR and camera inputs.'],
  ['System architecture', 'LiDAR and camera data provide the environmental input. Sensor fusion and SLAM estimate the AGV position and generate a map, A* selects a global route, and a local planner adjusts the trajectory for obstacle avoidance. Navigation commands are then passed to the ESP32 motor-control layer, with the Jetson Orin Nano supporting the higher-level computing environment.'],
  ['Design process', 'The mechanical design began with a 120 cm by 100 cm chassis concept and aluminium extrusion members. Custom brackets were then designed for the suspension, Unitree 4D LiDAR, and ZED 2i camera. The frame and printed parts were fabricated, assembled, and checked as the navigation and electronics systems were integrated.'],
  ['Hardware and software', 'The documented system uses ROS2, LiDAR, camera-based machine vision, an ESP32, an NVIDIA Jetson Orin Nano, SolidWorks, Gazebo, SLAM, A* global planning, local obstacle avoidance, and YOLOv8 models for vision tasks.'],
  ['Technical specifications', 'The chassis is documented at 120 cm by 100 cm and uses a combination of 45 by 45 mm and 40 by 80 mm aluminium profiles. The suspension attachment uses a 29.5 mm strut opening and M6 fasteners. The LiDAR mount uses a 100 mm by 60 mm base with M3 LiDAR fasteners and M4 chassis mounting holes.'],
  ['Testing and results', 'The report documents a Gazebo simulation with static obstacles, a LiDAR and camera configuration aligned with the physical platform, and an integrated chassis with motor hubs, battery, emergency stop, wiring, camera, and LiDAR placement. The broader integrated-system chapter also records vision, access-control, dashboard, and motor-control testing.'],
  ['Challenges and solutions', 'Hospital navigation requires localization, mapping, path planning, and collision avoidance in environments with both fixed and moving obstacles. The project addresses this through LiDAR and camera sensing, SLAM, global and local planning, sensor mounting at deliberate heights, and a modular chassis that supports adjustment and maintenance.'],
  ['Key achievements', 'The project produced a documented AGV chassis and navigation platform with custom mechanical mounts, a ROS2 navigation strategy, LiDAR and camera integration, and an embedded control path linking navigation commands to the vehicle motors.'],
  ['Lessons learned', 'The work shows how mechanical dimensions, sensor placement, software architecture, and control interfaces must be designed together. It also highlights the importance of clear safety margins, stable mounts, cable management, and staged simulation before real-world deployment.'],
  ['Future improvements', 'Further work should validate the AGV with combined static and dynamic obstacles, refine localization and route planning, complete the secure payload compartments, tune the safety thresholds, and expand testing in hospital-like environments with representative loads and users.'],
];
