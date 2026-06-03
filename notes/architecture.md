# Application Architecture

- An application architecture describes the patterns and techniques used to design and build an application.

- The architecture is a starting point or roadmap for building an application .

- The architecture describes both the front end and backend of an application services.

## Types of application architectures

- Monotiths
- N-Tire
- Microservices
- Event Driven
- Service-oriented

## Monoliths Architecture

- A monolithic architecture is a traditional single tire application design.
- In a monilith, an application is written as a single unit of code where all components share the same resources and memory space.
- All functionalities are contained within a single large application stack.

### Key Characteristic

- Tight Coupling
- Single Deployment Unit
- Simplicity and Speed

### Challenges

- Difficult Scaling
- System Vulnerability
- Limited Flexibility


## N-Tire Architecture

- N-tire architecture (a.k.a multitier or layered architecture) is a traditional client server software design pattern.
- The various components are separated into distinct layers or "tires".
- It is widely used for smaller, simpler applications.


### Key Characteristic
- Layer Communication
- Independent Upgrades

### Layers 

- Presentation Layer
- Application Layer
- Data Layer

## Microservices Architecture

- It is a modern software design approach where an application is broken down into its smallest components, forming a collection of small, independent and loosely coupled services.

- Each microservice is designed to perform one specific business function and acts as its own mini-application.


### Key Characteristic

- Independent Development and Deployment
- Network based Communication
- Technology Flexibility
- Data Autonomy


### Benefits

- Dynamic Scalability
- Fault Tolerance
- Faster Delivery

### Challenges

- Complexity
- Higher Latency


## Event-driven Architecture

- It is a system design where the core structure revolves around the capture, communication and processing and persistence of "event".

- An **event** is defined as any significant occurence or change in state within system hardware or software.

### Key Characteristics

- High Decoupling
- Asynchronous Communication
- Real-Time, Event Driven Flow
- Immutability and Event logs

### Components

- Event Producer
- Event Consumer

### Models

- Publish / Subscribe
- Event streaming 

## Service Oriented architecture

- It structures an application into discrete, reusable services.
- It is very similar to microservices architecture.


### Key Characteristics

- Enterprise Service Bus (ESB)
- Communication Protocols
- Front-End Integration 












