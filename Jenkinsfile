pipeline {
    agent any
    stages {
        stage('Test') {
            steps 
                {  echo 'jenkinsFile'}
            }
        
        stage("docker login") {
            steps {
                echo " ============== docker login =================="
                withCredentials([usernamePassword(credentialsId: 'Fuckmin', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh """
                    docker login -u 'GAD' -p 'e56fca95fc394d259fd7f7b97e823c06'
                    """
                }
            }
        }
        
        
            stage('build') {
                steps 
                { echo " ============== start building image =================="
                sh 'docker build -t git-docker:latest . ' }
            }
            
    }
    
}
