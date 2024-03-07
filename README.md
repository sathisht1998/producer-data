Documentation
Node JS Application Deployment
Prerequisites
• Jenkins installation
• Node Js installation
• Java installation
• Npm
• Git
•
• login to amazon console add security groups properly. Node js 3000
• Jenkins 8080
• create ec2 instance.
• use ubuntu server
• connect ec2 to the terminal / Git bash.
• Install java.
• sudo apt update
• sudo apt install fontconfig openjdk-17-jre
• java -version
• openjdk version "17.0.8" 2023-07-18
• OpenJDK Runtime Environment (build 17.0.8+7-Debian-1deb12u1)
• OpenJDK 64-Bit Server VM (build 17.0.8+7-Debian-1deb12u1, mixed mode, sharing)
• Install Jenkins
• sudo	wget	-O /usr/share/keyrings/jenkins-keyring.asc	\
• 		https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
• echo	deb	[signed-by=/usr/share/keyrings/jenkins-keyring.asc]	\
• 		https://pkg.jenkins.io/debian-stable	binary/	|	sudo	tee \
• 		/etc/apt/sources.list.d/jenkins.list	> /dev/null
• sudo	apt-get	update
• sudo	apt-get	install	jenkins
•
for more information
https://www.jenkins.io/doc/book/installing/linux/#debianubuntu
• Connect with public ip with 8080 port
• Connect with Jenkins
• Pull the code from git to the Jenkins
• Back to ec2 instance
• Setup a path for working directory
• /var/www/
• Mkdir and directory
• Ls and we can see /var/www/directory name I will give it as nodeapp
• Go to the Jenkins and under build steps update this path
• Cp-r . * /var/www/nodeapp
• And build the pipeline
• Build was failure
• You need to give permissions to the path. sudo chown -R jenkins:jenkins_user
/var/www/nodeapp
• Use the above command and give permission.
• If any error occurs refer to chat gpt
• And execute the build
• Install nginx server and start it with your public ip
• sudo apt update
• sudo apt install nginx
• sudo systemctl start nginx
• sudo systemctl enable nginx
• sudo systemctl status nginx
• Come back to the terminal and install node JS and npm
• And check the nodejs version it shoud be nodejs 20
• If not you need to update the version
• $ curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
• $ sudo apt install -y nodejs
• Use above commands to update
• Stop nginx server
• sudo service nginx stop
And hit npm start command.
• Give the security permissions in ec2 port no 8765 and save it.
• And in mongo dB server white list your public ip
• In post men by using below curl test your application
curl -vvv --location --request POST 'http://34.226.238.38:8765/auth/login' \
header 'Content-Type: application/ison' \
data-raw '{ "email":"ram@gmail.com", "password":"ram1234"
}’
Add your ip in the above ip address.
It will give response
