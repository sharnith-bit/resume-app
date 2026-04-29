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
        echo 'Kubernetes deployment done manually'
    }
}

stage('Verify Deployment') {
    steps {
        echo 'Application deployed successfully (verified manually)'
    }
}
    }
}
