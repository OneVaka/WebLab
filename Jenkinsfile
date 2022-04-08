pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                echo 'jenkinsFile'
            }
            stage('build') {
                steps {
                echo " ============== start building image =================="
                sh 'docker build -t gitDocker:latest . '
                }
            }
            }
        }
    
}
