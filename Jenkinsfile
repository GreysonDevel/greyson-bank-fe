node('docker-agent-nodejs14') {
  String stackName = params.stackName
  String frontendContextPath = params.frontendContextPath
  String imageName = "${stackName}/${stackName}-fe"
  String containerName = "${stackName}-fe"
  String networkName = "${stackName}-network"

  def mvnHome
  def mvnEnv = "-DskipTests"

  // do not change
  def proxyNetworkName = "proxy-network"

  stage('Preparation') { // for display purposes
    // Get some code from a GitHub repository
    git branch: repoBranch,
      credentialsId: 'bitbucket',
      url: repoUrl
  }
  stage('Build') {
    sh 'npm install'
    sh 'npm run build'
    sh "tar -C build/ -zcvf app.tgz ."
  }

  stage("Build image : ${imageName}") {
    /* This builds the actual image; synonymous to
     * docker build on the command line */
    app = docker.build(imageName)
  }

  stage('Deploy image') {
    sh "docker ps -f name=${containerName} -q | xargs --no-run-if-empty docker container stop"
    sh "docker container ls -a -fname=${containerName} -q | xargs -r docker container rm"

    if (params.logTo == 'Kibana'){
      sh "docker run --name ${containerName} --network ${networkName} -e APPLICATION_CONTEXT=${frontendContextPath} -d --log-driver gelf --log-opt gelf-address=udp://${logstashUrl} ${imageName}"
    } else{
      sh "docker run --name ${containerName} --network ${networkName} -e APPLICATION_CONTEXT=${frontendContextPath} -d ${imageName}"
    }

    sh "docker network connect ${proxyNetworkName} ${containerName}"

  }

}