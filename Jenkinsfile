pipeline {
    agent any
 
    tools {
        nodejs 'Node20'
    }
 
    options {
        ansiColor('xterm')
    }
 
    parameters {
        string(name: 'APP_VERSION', defaultValue: '1.0.0', description: 'Enter application version')
    }
 
    environment {
        PROJECT_NAME = "Node Parameterized Build"
        BUILD_ARTIFACT = "node-demo-${params.APP_VERSION}.tar.gz"
    }
 
    stages {
 
        stage('Checkout') {
            steps {
                echo "\u001B[36m📦 Checking out code...\u001B[0m"
                git branch: '2ndNodeJSDemo', url: 'https://github.com/P123671/node-ci-demo.git'
            }
        }
 
        stage('Install Dependencies') {
            steps {
                echo "\u001B[34m📦 Installing dependencies...\u001B[0m"
                sh 'npm install'
            }
        }
 
        stage('Lint Code') {
            steps {
                echo "\u001B[33m🔍 Running ESLint...\u001B[0m"
                sh 'npm run lint || true'
            }
        }
 
        stage('Run Tests') {
            steps {
                echo "\u001B[35m🧪 Running unit tests...\u001B[0m"
                sh 'npm test'
            }
        }
 
        stage('Package Artifact') {
            steps {
                echo "\u001B[32m📦 Creating build artifact: ${env.BUILD_ARTIFACT}\u001B[0m"
                sh "tar -czf ${env.BUILD_ARTIFACT} *"
                archiveArtifacts artifacts: "${env.BUILD_ARTIFACT}", fingerprint: true
            }
        }
    }
 
    post {
        success {
            echo "\u001B[32m✅ SUCCESS: ${env.PROJECT_NAME} built version ${params.APP_VERSION}\u001B[0m"
        }
        failure {
            echo "\u001B[31m❌ FAILURE: Build failed for version ${params.APP_VERSION}\u001B[0m"
        }
        always {
            echo "\u001B[36m📊 Pipeline finished at ${new Date()}\u001B[0m"
        }
    }
}