# AWS Copilot Architecture

## Folders 

```sh
    |- applications     ## Applications 
        |- ...
    |- lib
        |- utils        ##  개발에 필요한 Tools
        |- vpcs         ## VPC Setting
        |- ...
```

## Tech

- AWS CDK + Typescript

    ```sh
        cdk init sample-app --language typescript
        npm run build
        npm run watch
        npm run test
        cdk deploy
        cdk diff
        cdk synth
    ```

- AWS Copilot CLI

    ```sh
        ## install (mac)
        brew install aws/tap/copilot-cli

        cd applications
        copilot init            ## 배포에 필요한 yml 생성 /copilot
        copilot deploy          ## 배포
        copilot app delete      
    ```

## Reference

- <a href="https://cdkworkshop.com/20-typescript/20-create-project/300-structure.html"> AWS CDK Workshop </a>
- <a href="https://aws.github.io/copilot-cli/docs/getting-started/install/"> AWS Copilot CLI </a>