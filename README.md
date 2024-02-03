# Rust in WebAssembly Experiment

This project explores the integration of Rust with WebAssembly to run Rust code in the browser. By leveraging WebAssembly, we can execute Rust code at near-native speed within a web environment, opening up new possibilities for web development with the performance benefits of Rust.

## Getting Started

These instructions will guide you through setting up your environment and running the experiment on your local machine.

Prerequisites
Before you begin, ensure you have the following tools installed on your machine:

* Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine. Download and install it from [https://nodejs.org/en]().
  
* Rust is necessary for compiling our Rust code into WebAssembly. Download and install Rust from [https://www.rust-lang.org]().

### Installation

Follow these steps to set up the project on your local machine:

1. Clone the Repository
   Begin by cloning this repository to your local machine. Open a terminal and run:

```
git clone 
```

Replace `<repository-url>` with the actual URL of this repository.

2. Install Dependencies
   Navigate into the project directory and install the necessary dependencies using npm (Node Package Manager):

```
cd rust_wasm
npm install
```

3. Build the Project
   Once the dependencies are installed, you can compile the Rust code into WebAssembly by running:

```
   npm run build
```

4. Run the Development Server
   Start the local development server to run the project in your browser:

```
npm run dev
```

5. Riew the Result
   Open your web browser and go to the URL provided by the development server (typically [http://localhost:5173]() or similar). Open the browser's console to see the results of the Rust code executed in WebAssembly.

### Additional Information

**Learning Resources**: If you're new to Rust, WebAssembly, or integrating Rust with the web, consider checking out The Rust and WebAssembly Book for comprehensive guides and tutorials.
**Troubleshooting**: For common issues related to setup and execution, refer to the FAQ section below. If you encounter any problems not covered in the FAQ, please open an issue in the repository.
FAQ

**Q: I'm having trouble installing Rust. What can I do?**
A: Ensure you're following the instructions on the official Rust website. If you encounter specific errors, searching the error message online often leads to helpful community responses.
**Q: My build fails with a WebAssembly-related error. How can I fix it?**
A: Make sure you have the latest version of the `wasm-pack` tool installed. You can install or update it by running cargo install wasm-pack.
