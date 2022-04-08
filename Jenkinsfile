pipeline {
    agent any
    stages {
        stage('Test') {
            steps 
                {  echo 'jenkinsFile'}
            }
            stage('build') {
                node {
             checkout scm

            def customImage = docker.build("my-image:${env.BUILD_ID}")

     customImage.inside {
        sh 'make test'
    }
}
            }
            
        }
    
}
