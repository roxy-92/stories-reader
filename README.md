# Stories Reader

**Stories Reader** is a multi-format reading and publishing web application built with Angular and TypeScript. It is designed to provide a unified platform for reading, organizing, and publishing comics, manga, webtoons, graphic novels, and illustrated novels.

The project aims to offer a flexible reading experience that adapts to different storytelling formats, alongside an intuitive content management interface for creators.

## Features

### Story Library
- Browse a collection of stories displayed through cover artwork.
- Organize publications by format and category.
- View project information, descriptions, and available chapters.
- Navigate between featured stories and the complete library.
- Customize the creator profile, avatar, and header banner.

### Multi-Format Reader
- **Left-to-right:** Traditional Western comic reading.
- **Right-to-left:** Manga-style reading.
- **Vertical scrolling:** Continuous reading for webtoons and vertical comics.
- **Illustrated novels:** Text-based chapters with embedded illustrations.
- Responsive layouts for desktop, tablet, and mobile devices.

### Content Management
- Create and organize projects and chapters.
- Add individual pages or upload multiple pages simultaneously.
- Automatically associate uploaded pages with their corresponding project and chapter.
- Edit metadata and reorder pages.
- Manage different publication formats through a unified interface.

## Development Approach

Stories Reader is being developed as a frontend-focused portfolio project, with an architecture designed to support future backend integration.

The initial version uses static content and locally stored assets to demonstrate the reading experience without requiring a server or database.

Publishing and uploading features will be represented in the interface but remain disabled in demo mode, with clear notices explaining their limitations.

The long-term goal is to evolve the application into a fully functional publishing platform with persistent content storage and management capabilities.

## Technologies

### Languages
- TypeScript
- HTML
- SCSS

### Frameworks & Libraries
- Angular 22
- Angular Router
- Angular Material (planned)
- Iconify (planned)

### Tools & Development
- Node.js
- npm
- Git & GitHub
- Visual Studio Code

### Architecture & Concepts
- Standalone Angular components
- Component-based architecture
- Lazy-loaded routing
- Angular Signals
- Responsive web design
- JSON-based content management
- Separation of data access and presentation layers
- Backend-ready application architecture

## Project Status

**In early development.**

The initial development phase focuses on establishing the application's structure, navigation, reusable components, and layouts before implementing the different reading modes and static content library.