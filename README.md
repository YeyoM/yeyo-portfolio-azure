# YeyoM Portfolio (Azure Version)

This is the repository for my personal portfolio, it is a simple website that showcases my projects and skills. This is the third version of my portfolio, the first one (which you can check [here](https://github.com/YeyoM/portfolio) was built with Next, Docker and Nginx and deployed to Digital Ocean, the second version was built with Next.js and deployed to AWS S3, cloudfront and Route 53, all deployed using Terraform and github actions, you can check it [here](https://github.com/YeyoM/yeyo-portfolio-aws). This new version will be deployed using Azure services using the same codebase and as well using github actions and Terraform.
You can visit the website [here](https://yeyomoreno.tech).

## Technologies

- Next.js
- Docker
- Github actions
- Azure 
- Terraform

## Architecture

The project is built with Next.js and Docker, the Dockerfile is used to build the project and the docker-compose file is used to run the project locally. 

![Architecture](./readme/architecture.png)

Still working on the diagram

## How to run locally

To run the project locally you can run the following command:

```bash
npm run dev
```

## Test locally

To test the project (make sure the build is successful) you can run the following command:

```bash
./test.sh
```

## How to deploy

There is already a script and a CI and CD pipeline that uses github actions to deploy the project to the Azure.
