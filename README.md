Cat State Collapse

Interactive mixed-media installation developed for the MA Computational Arts Degree Show at Goldsmiths, University of London.

Repository Contents
- `/codes`: Custom JavaScript controller handling physical arcade button signals (Red vs. Green), software debouncing, and metadata evaluation against video playback.
- `Exhibition main demo file.toe`: TouchDesigner project file integrating real-time MediaPipe body tracking, dynamic video sequencing, and secondary display triggering.

System Architecture & Tech Stack
Physical Input: Industrial arcade buttons intercepted via Node.js/JavaScript.
Vision Tracking: TouchDesigner with MediaPipe plugin for real-time skeletal and presence detection.
Inter-Process Sync: Local event bridge connecting the JavaScript decision controller and TouchDesigner.
Visual Assets: Primary dynamic video sequence paired with synthetic AI comparative footage (synthesized via Google AI Studio).

Author & Acknowledgements
Author:Yunfan Li (MA Computational Arts, Goldsmiths)
Supervisors:Katie Tindle (Technical Supervisor), Becky Aston (Programme Leader)
