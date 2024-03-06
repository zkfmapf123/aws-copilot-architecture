# AWS Copilot Architecture

## Folders 

```sh
    |- lib
        |- utils // 개발에 필요한 Tools
        |- vpcs  // VPC Setting
        |- ...
```

## Tech

- AWS CDK + Typescript

    ```sh
        cdk init sample-app --language typescript
    ```

- AWS Copilot CLI

    ```sh
        npm run build
        npm run watch
        npm run test
        cdk deploy
        cdk diff
        cdk synth
    ```

## Reference

- <a href="https://cdkworkshop.com/20-typescript/20-create-project/300-structure.html"> AWS CDK Workshop </a>