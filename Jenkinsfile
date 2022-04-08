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
                    docker login -u $USERNAME -p $PASSWORD
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
