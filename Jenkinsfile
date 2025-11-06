pipeline {
    agent any
 
    tools {
        nodejs 'Node20'  // Use the NodeJS plugin installation
    }
 
    options {
        ansiColor('xterm')
    }
 
    environment {
        PROJECT_NAME = "Node CI Demo"
    }
 
    stages {
        stage('Checkout') {
            steps {
                echo "\u001B[36m📦 Cloning repository...\u001B[0m"
                git branch: 'main', url: 'https://github.com/P123671/node-ci-demo.git'
            }
        }
 
        stage('Install Dependencies') {
            steps {
                echo "\u001B[34m📦 Installing npm packages...\u001B[0m"
                sh 'npm install'
            }
        }
 
        stage('Lint Code') {
            steps {
                echo "\u001B[33m🔍 Running ESLint...\u001B[0m"
                sh 'npm run lint || true' // use || true to avoid pipeline failure for demo
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
                echo "\u001B[32m📦 Zipping project...\u001B[0m"
                sh 'tar -czf build-artifact.tar.gz *'
                archiveArtifacts artifacts: 'build-artifact.tar.gz', fingerprint: true
            }
        }
    }
 
    post {
        success {
            echo "\u001B[32m✅ SUCCESS: Node.js pipeline completed successfully!\u001B[0m"
        }
        failure {
            echo "\u001B[31m❌ FAILURE: Check console for errors.\u001B[0m"
        }
        always {
            echo "\u001B[36m📊 Pipeline finished at ${new Date()}\u001B[0m"
        }
    }
}