// MyFirstCloudArchitecture
import React from "react";
import eisei from "./images/eisei.jpeg";
import Typography from "@material-ui/core/Typography";
import CloudArchitecture from "./images/vline_atchitecture_v2.png";

const MyFirstCloudArchitecture = () => {
  return (
    <article>
      <Typography variant="h5" color="primary">
        My First cloud Architecture
      </Typography>
      <div>
        <p>
          {/* Image */}
          <img src={CloudArchitecture} alt="eisei.jpeg" />
          <center>Fig: Final Cloud Architecture</center>
          <br />
        </p>

        {/* Introduction */}
        <p>
          Recently I researched, planned and build cloud architecture for Rail
          Replacement(RRMS) projects at my workplace which is now used in
          production. Building this architecture helped me gain good insights on
          VPC, load balancer, autoscaling and Elastic container service.
        </p>
        <p>
          In this post, I will be will be covering requirement analysis, things
          which I learned throughout the development phase and why one resource
          was picked over another.
        </p>

        {/* requirements */}
        <h3>
          <u>Architecture Requirements</u>
        </h3>
        <ul>
          <li>
            Deploy application in containers for easier and faster deployments.
          </li>
          <li>
            Ensure high availability of application. Loads can be significantly
            high on some days and low on some.
          </li>
          <li>Ensure Security.</li>
          <li>Reduce the cost of operating architecture.</li>
          <li>Automated deployments. Eg: Pipeline .</li>
          <li>
            Readily available Logs to debug. SSH into compute incase logs are
            not enough for debugging.
          </li>
        </ul>
        <p>
          After through study of above requirements, we decided to use Fargate
          for compute resource instead of EC2 at the very begenning. This
          decision has proven to be good decision and I will cover the 'Why ?'
          part later down the article.
        </p>


        {/* Development Phases */}
        <h3><u>Development Phase</u></h3>

        {/* Phase 1 */}
        <Typography  color="secondary">
          1. Push application image to ECR
        </Typography>
        In phase 1, I tested the application locally using the image build from
        the dockerfile. There were two dockerfile maintained, one for local
        development and one for prod, difference was they had different
        credentials according to environment. I build the prod image locally,
        performed test, created an image repository in ECR and finally uploaded
        it with proper tags.
        

        {/* Phase 2 */}
        <Typography  color="secondary" className="mt-3">
          2. Network
        </Typography>
        This phase covers the creation of network required to run the
        application. I used VPC to create isolated network in the cloud where
        our load balancers will be available to the public via internet from
        anywhere and the backend containers in private network which cannot be
        accessed outside other than through load balancer.
        <ul>
        <li>I learned we could only create max 5 VPC per region, so made used of already existing VPC.</li>
        <li>All incomming request inside VPC must come through Internet gateway (IG). Also the max IG count is also 5 </li>
        <li>For high availibily, create public/private subnets in atleast 2 regions.</li>
        <li>For private subnet to access internet, we need to add NAT Gateway as a middleman for outbound request.</li>

        </ul>
        {/* Phase 3 */}
        <Typography  color="secondary" className="mt-3">
        3. Create compute resources
        </Typography>
        In phase 3, I began building ECS to deploy our applicaion. 
        <li>Since the backend was container based deployment, ECS service was selected.  </li>   
        <li>
          For ECS, we could select either EC2 or Fargate as compute resource. The downsize to EC2 instance was we were required to allocate the instance in advance to setup auto-scaling. This ment we had to pay for those resources even when ther are not in use. However for Fargate  wo dont neet to allocate in advance, AWS takes care of spinning up new tasks as load increases. Using fargate seems to be cheaper than spinning up multiple EC2 instance for standby purposes.
        </li>   

        <Typography  color="secondary" className="mt-3">
        4. Setup Auto-scaling
        </Typography>
        As per requirement, High availability is achieved by running the tasks in atleast 2 regions, if a task fails in one loadbalancer point to running task in another server. Also, as the Average CPU Utilization increases above 70%, set up a rule to spin up a new container task to reduce load on single task.

        <Typography  color="secondary" className="mt-3">
        5. Automated Deployment
        </Typography>
        Finally, setup a codebuild & pipeline to make a new application build whenever a RE is merged into prod branch in repository. The enviroment variable required by the application is provided to codebuild which is used in pipeline. 
      </div>
    </article>
  );
};

export default MyFirstCloudArchitecture;
