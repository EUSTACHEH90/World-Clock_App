World Clock App
A simple world clock application built with Angular that allows users to view the current time in multiple time zones. Users can select a time zone from a list and see the current time dynamically updated.

Features
Multiple Time Zones Support: View the current time for different cities around the world.

Real-Time Time Updates: Time updates every second.

User-friendly Design: Simple and clean UI for selecting time zones and viewing times.

Dynamic Time Zone Selection: Allows users to select from a predefined list of time zones.

Efficient Component Communication: Parent-child communication between components.

Basic Forms for User Input: Select the desired time zone from a dropdown.

Technologies Used
Angular CLI: The project was generated using Angular CLI.

TypeScript: Used for defining types and interfaces.

HTML & SCSS: Styling and structure of the application.

Intl API: Used for displaying the time formatted in different time zones.

Concepts Utilized
Component Communication: Parent-child communication via @Input() and @Output().

Property Binding: Used to pass the selected time zone from the parent to the child component.

Event Binding: Emitting events to notify the parent component when the time updates.

Two-way Binding: Synchronizing form inputs with the selected time zone.

Structural Directives (*ngFor): Looping through a list of time zones to populate the dropdown.

Pipes: Used for formatting the time in the desired format.

Services: TimezoneService used to fetch the list of available time zones.

CommonModule: Imported to use basic Angular features like directives and pipes.

Installation

Clone the repository:

git clone https://github.com/yourusername/world-clock-app.git

Navigate into the project folder:

cd world-clock-app

Install the dependencies:

npm install

Run the development server:

ng serve

Open your browser and visit http://localhost:4200/ to see the application in action.

Development server
To start a local development server, run:

ng serve
Once the server is running, open your browser and navigate to http://localhost:4200/. The application will automatically reload whenever you modify any of the source files.

Code scaffolding
Angular CLI includes powerful code scaffolding tools. To generate a new component, run:


ng generate component component-name
For a complete list of available schematics (such as components, directives, or pipes), run:

ng generate --help

Building
To build the project run:

ng build
This will compile your project and store the build artifacts in the dist/ directory. By default, the production build optimizes your application for performance and speed.

Running unit tests
To execute unit tests with the Karma test runner, use the following command:

ng test

Running end-to-end tests
For end-to-end (e2e) testing, run:

ng e2e
Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

SCREENSHOT (interface)

Time Zone Selection

The user can select a time zone from the dropdown list of predefined options. This allows them to see the current time in various cities around the world.  (public/assets/images/timezone.png)

World Clock Display

Once the user selects a time zone, the app displays the current time for that zone, updated every second.
(public/assets/images/timedisplay.png)


Time Update

The time is dynamically updated every second based on the selected time zone. This ensures the user always sees the correct time.
(public/assets/images/timeupdate1.png) (public/assets/images/timeupdate2.png)


Additional Resources
For more information on using the Angular CLI, including detailed command references, visit the Angular CLI Overview and Command Reference page.

