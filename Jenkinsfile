pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/sharnith-bit/resume-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t resume-app:1.0 .'
            }
        }

        stage('Check Docker Images') {
            steps {
                bat 'docker images'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f deployment.yaml'
                bat 'kubectl apply -f service.yaml'
            }
        }

        stage('Verify Pods') {
            steps {
                bat 'kubectl get pods'
                bat 'kubectl get svc'
            }
        }
    }
}
