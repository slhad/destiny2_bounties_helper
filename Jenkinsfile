node {
    checkout scm
    def builde
    stage('Build') {
        def argsDocker = "-f Dockerfile --pull ."
        builde = docker.build("slhad/destiny2_bounties_helper:build-${env.BUILD_ID}", argsDocker)
    }
    stage('Push') {
        if (env.BRANCH_NAME == "master") {
            docker.withRegistry("https://index.docker.io/v1/", "dockerId") {
                builde.push("latest")
            }
        }
    }
    stage('Deploy') {
        if (env.BRANCH_NAME == "master") {
            sh "docker stop destiny2-bounties-helper || exit 0"
            sh "docker rm destiny2-bounties-helper || exit 0"
            sh "docker pull slhad/destiny2_bounties_helper"
            sh "docker run --restart=always -e API_KEY=SOMEKEY  -e CLIENT_ID=SOMEID -e CLIENT_SECRET=SOMESECRET -d -p 45002:8888 --name destiny2-bounties-helper slhad/destiny2_bounties_helper"
        }
    }
}