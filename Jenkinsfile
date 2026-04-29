pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t resume-app:1.0 .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
              bat 'kubectl apply -f deployment.yaml --validate=false'
              bat 'kubectl apply -f service.yaml --validate=false'
            }
        }

        stage('Verify') {
            steps {
                bat 'kubectl get pods'
                bat 'kubectl get svc'
            }
        }
    }
}
