node {
    checkout scm
    def builde
    stage('Build') {
        def argsDocker = "-f Dockerfile --pull ."
        builde = docker.build("slhad/destiny2_bounties_helper:build-${env.BUILD_ID}", argsDocker)
    }
    stage('Push') {
        if (env.BRANCH_NAME == "main") {
            docker.withRegistry("https://index.docker.io/v1/", "dockerId") {
                builde.push("latest")
            }
        }
    }
    stage('Deploy') {
        if (env.BRANCH_NAME == "main") {
            sh "docker stop destiny2-bounties-helper || exit 0"
            sh "docker rm destiny2-bounties-helper || exit 0"
            sh "docker pull slhad/destiny2_bounties_helper"
            withCredentials([
                string(credentialsId: "BUNGIE_APP_CLIENT_ID", variable: 'CLIENT_ID'),
                string(credentialsId: "BUNGIE_APP_CLIENT_SECRET", variable: 'CLIENT_SECRET'),
                string(credentialsId: "BUNGIE_APP_API_KEY", variable: 'API_KEY')
            ]){
            sh "docker run --restart=always -e API_KEY=${API_KEY} -e CLIENT_ID=${CLIENT_ID} -e CLIENT_SECRET=${CLIENT_SECRET} -d -p 45002:8888 --name destiny2-bounties-helper slhad/destiny2_bounties_helper"
            }
        }
    }
}