import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";

import college from "./images/FiveYearsAsSWE/college.jpeg";
import college_dab from "./images/FiveYearsAsSWE/college_dab.jpeg";
import mustang from "./images/FiveYearsAsSWE/mustang.jpeg";

import labim_college from "./images/FiveYearsAsSWE/labim_college.jpeg";
import cycling from "./images/FiveYearsAsSWE/cycling.jpeg";
import CG from "./images/FiveYearsAsSWE/CG.jpeg";
import pokhara from "./images/FiveYearsAsSWE/pokhara.jpeg";
import sarankot from "./images/FiveYearsAsSWE/sarankot.jpeg";

import abc from "./images/FiveYearsAsSWE/abc.jpeg";
import abc_two from "./images/FiveYearsAsSWE/abc_two.jpeg";
import graduation from "./images/FiveYearsAsSWE/graduation.jpeg";

import hike from "./images/FiveYearsAsSWE/hike.jpeg";
import office_outing from "./images/FiveYearsAsSWE/office_outing.jpeg";
import office_outing2 from "./images/FiveYearsAsSWE/office_outing2.jpeg";
import poker from "./images/FiveYearsAsSWE/poker.jpeg";
import pokhara_2 from "./images/FiveYearsAsSWE/pokhara_2.jpeg";
import pokhara_3 from "./images/FiveYearsAsSWE/pokhara_3.jpeg";
import sujan from "./images/FiveYearsAsSWE/sujan.jpeg";
import covid_2 from "./images/FiveYearsAsSWE/covid_2.jpeg";

import sherpa from "./images/FiveYearsAsSWE/sherpa.jpeg";
import sherpa_farewell from "./images/FiveYearsAsSWE/sherpa_farewell.jpeg";
import beer_pong from "./images/FiveYearsAsSWE/beer_pong.jpeg";
import dhulikhel from "./images/FiveYearsAsSWE/dhulikhel.jpeg";
import pottery from "./images/FiveYearsAsSWE/pottery.jpeg";
import sister_wedding from "./images/FiveYearsAsSWE/sister_wedding.jpeg";
import butwal_flight from "./images/FiveYearsAsSWE/butwal_flight.jpeg";

import langtang from "./images/FiveYearsAsSWE/langtang.jpeg";
import pizza from "./images/FiveYearsAsSWE/pizza.jpeg";
import pushups from "./images/FiveYearsAsSWE/pushups.jpeg";
import wolf_fish from "./images/FiveYearsAsSWE/wolf_fish.jpeg";
import wolf_outing from "./images/FiveYearsAsSWE/wolf_outing.jpeg";
import yomari from "./images/FiveYearsAsSWE/yomari.jpeg";
import wolf_holi from "./images/FiveYearsAsSWE/wolf_holi.jpeg";
import kic_meet from "./images/FiveYearsAsSWE/kic_meet.png";
import ImageModal from "../../utils/ImageModal";

const FiveYearsAsSWE = () => {
  return (
    <div>
      <div className="intro mb-5">
        <h1>March 2023</h1>
        <h1>5 years of life as a Software Engineer&nbsp;</h1>
        <p>
          Hi fellow readers 👋, I am Bishal. As the title suggests this post is
          going to cover the experiences I've been able to accumulate over the 5
          years of my life; I will try to touch on different aspects and not
          limit strictly to career. I try to be as open as possible while
          writing here. 🙂
        </p>
      </div>

      <div className="year mb-5">
        <h2>Year 0 (2017)</h2>
        <p>
          Chose to study Computer Science because I had done some web stuff
          :&nbsp; HTML, CSS at school which I enjoyed and was good at, also
          spend my early days on computer playing games and tinkering around.
          The course peaked my interest; besides, how hard can this be right? 3
          years down the college, I was pretty much failing all semesters till
          5th. When TU published result my mom used to pray that I failed only
          one subject , and it did work for the first year&nbsp; 😂.&nbsp;
        </p>
        <p>
          I was then working part time at a Civil Engineering consultancy (10k)
          which had helped me save some cash for a college trip to Jomsom and
          Mustang. The work was okay and being paid gave a different kind of
          happiness.I had to do different office visits frequently, I didn't
          have my own vehicle and Pathao wasn't a thing back then which led to
          exhaustion and burnout. At this point, I'd realized that a frequent
          commuting job is not for me.
        </p>
        <p>
          During 5th sem, I noticed that if I don't clear my back-papers, I
          won't be able to participate in my graduation but neither were my
          friends, so all was okay . Also, this was the peak flirting phase,
          funny days, maybe you should email me yours?&nbsp;
        </p>
        <p>
          At 6th sem, fear started kicking in and this is the point in my life
          where I went full 180, got ambitious and started clearing back papers
          from 2nd sem. Learned programming via online resources and created a
          mobile Game : Esie, got an internship at Crossover. I had a good
          mentor Bipin Tamang, he's helped me grow both professionally and
          personally, also we keep in touch and go hikes when feasible.&nbsp;
        </p>

        <Alert severity="success" icon={false} className="mt-5">
          <AlertTitle>TLDR;</AlertTitle>I graduated with a degree in Computer
          Science. Just a normal kid wondering what it meant to be cool. I
          participated in some programming events, had an internship and made a
          mobile game &amp; some websites.
        </Alert>

        <Grid container spacing={3} className="mt-3">
          <Grid item xs={4}>
            <ImageModal imgSrc={college} imgAlt={"College Pic"} />
          </Grid>
          <Grid item xs={4}>
            <ImageModal imgSrc={college_dab} imgAlt={"college dab"} />
          </Grid>
          <Grid item xs={4}>
            <ImageModal imgSrc={mustang} imgAlt={"mustang torinicos"} />
          </Grid>
        </Grid>
      </div>

      <hr />
      <div className="year mb-5">
        <h2>Year 1 (2018)</h2>
        <p>
          By year 1, the prospect of an actual SWE job was on the horizon. I got
          my first job at Chaudhary Group (19K). At this point, I was basically
          teaching myself programming and database skills as required. I worked
          on an internal office software CG Connect, which allowed sharing
          company news, general documents and other features. I'd meet with
          people from the Communication and HR dept, understand their
          requirements and incorporate it into software.
        </p>
        <p>
          I'd go to movies, anime expo, cycling and have night outs with
          friends; one was at Chitlang.
        </p>
        <p>
          In my spare time, I'd build silly websites using PHP and jQuery. Most
          apps were pretty bad as the whole code was spaghetti, but fun. I
          Switched to linux and learned some bash. I did this alone for about 8
          months and felt like I was not growing. There was this feeling “I
          don't know enough” and realized I wasn't communicating as easily as I
          used to.I informed my situation to the Department manager after which
          I got assigned to senior software engineers Bal Krishna Shrestha and
          Naresh Shrestha.
        </p>
        <p>
          I got the opportunity to work with mentors on other projects and was
          able to grasp concepts such as api, ORM and git for working with a
          team. Started using the Laravel framework, productivity goes through
          the roof. My mentors were easy to talk to and guided me navigate
          through career choices for which I will be forever thankful.
        </p>
        <p>
          For vacation, I went to pokhara. Rented a scooter and drove to
          Sarangkot and Begnas taal.
        </p>

        <Alert severity="success" icon={false} className="mt-5">
          <AlertTitle>TLDR;</AlertTitle>I got my first SWE job. Until the first
          8 months, I was doing solo programming, was lost. Found mentors who
          helped me navigate to the proper career path.&nbsp;
        </Alert>

        <Grid container spacing={3} className="mt-3">
          <Grid item xs={4}>
            <ImageModal imgSrc={cycling} imgAlt={"cycling"} />
          </Grid>
          <Grid item xs={4}>
            <ImageModal imgSrc={pokhara} imgAlt={"pokhara"} />
          </Grid>
          <Grid item xs={4}>
            <ImageModal imgSrc={sarankot} imgAlt={"sarankot"} />
          </Grid>
          <Grid item xs={4}>
            <ImageModal imgSrc={labim_college} imgAlt={"labim_college"} />
          </Grid>
          <Grid item xs={4}>
            <ImageModal imgSrc={CG} imgAlt={"CG"} />
          </Grid>
        </Grid>
      </div>
      <hr />

      <div className="year mb-5">
        <h2>Year 2 (2019)</h2>
        <p>
          Year two, got involved in more projects at CG, we had to travel to a
          warehouse at Satungal to discuss project requirements, and was able to
          get a vision on how software was changing the business industry.
        </p>
        <p>
          After working on CG Connect for over a year it was terminated,
          corporate bureaucracy stuff.
        </p>
        <p>
          Met with friends from schools and college when possible, some were
          involved in the IT industry like me and we had discussions on a wide
          range of topics. I genuinely loved knowing about techs they were
          using, they gave me a list of things to learn in future.
        </p>
        <p>
          I had been planning a trip to Annapurna Base Camp with friends since
          college. Finally, the time had come and a group of 6 went on ABC trek
          during Dashain. Friend's dad had a travel agency and had planned out
          the itinerary and lodging for us.
        </p>
        <p>
          My bachelor's Graduation ceremony (Big Day) was coming, and I attended
          with my mom &amp; good friend Khema.
        </p>
        <p>
          I got promoted to an executive (27k). I mentored a coworker, built
          apis for mobile applications and learned some server stuff. Work was
          okay but there was unrest within, I had a hunger to learn a bunch of
          stuff. Also, AI &amp; ML technologies were booming then and a part of
          me had FOMO. Felt the need to switch to a proper software company for
          growth.
        </p>
        <p>
          My cousin recommended that her workplace Tekvortex was hiring, so I
          applied and got the job (35k). Comfort zone literally jumped from the
          window. Previously I worked as a full stack developer and now as data
          analyst, half of the stuff learned before was not useful anymore. I
          got the opportunity to explore cloud technologies and saw actual usage
          of statistics to achieve data driven results. Also, met many talented
          software engineers and amongst them I consider two to be my
          mentors.&nbsp;
        </p>
        <ol>
          <li>
            one was ingenious programmer but had shit communication skills
          </li>
          <li>
            the other was shit programmer but had astonishing communication
            skills
          </li>
        </ol>
        <p>
          First expanded the intrinsic ambition within me and second helped me
          be more confident.
        </p>
        <p>
          During spare time, I worked on multiple small projects, CMS,
          ecommerce. Caught up with friends, go to movies and gym. Started
          helping with house chores.
        </p>
        <p>
          Bought a personal VPS server and performed all sorts of experiments,
          lots of moving fast and breaking things which helped my confidence
          grow more. Asked my friend to purchase a domain after which I started
          blogging.
        </p>

        <Alert severity="success" icon={false} className="mt-5">
          <AlertTitle>TLDR;</AlertTitle>Switching jobs got me out of my comfort
          zone, and I learned about cloud technologies and agile methodologies.
          Found good mentors. Moved fast and broke things which contributed to
          faster growth.
        </Alert>

        <Grid container spacing={3} className="mt-3">
          <Grid item xs={4}>
            <ImageModal imgSrc={abc_two} imgAlt={"abc_two"} />
          </Grid>
          <Grid item xs={4}>
            <ImageModal imgSrc={graduation} imgAlt={"graduation"} />
          </Grid>
          <Grid item xs={4}>
            <ImageModal imgSrc={abc} imgAlt={"abc"} />
          </Grid>
        </Grid>
      </div>
      <hr />

      <div className="year mb-5">
        <h2>Year 3 (2020)</h2>
        <p>
          Cloud technologies, agile methodologies, knowledgeable coworkers and
          huge learning opportunities, things I wanted were all present. I put
          lots of hours into adjusting to the changing environment, eventually
          burning myself out.
        </p>
        <p>
          The project was portrayed momentous &amp; critical which management
          reminded regularly, as an employee I felt so small to all this.The
          pressure to meet the expectation was huge. Maybe others felt the same
          and that's why there was a communication gap amongst developers even
          though they were physically present.
        </p>
        <p>
          Work and business logic seemed pointless to me at this point. I knew
          my work performance was weak and was basically focused on the skills
          which would help me down the line and having an income would allow you
          to go places and buy stuff. Had an appraisal (40k).
        </p>
        <p>
          Continued going to the gym, hikes, meet friends, started exploring new
          restaurants and fancy shops.
        </p>
        <p>For vacation I went to Pokhara.</p>
        <p>Attended first office outing.&nbsp;</p>
        <p>
          Appointed a checkup at the dentist and had to do a second root canal
          treatment.
        </p>
        <p>
          Covid pandemic happened and things went south. Day to day lifestyle
          was impacted for all. There was a risk of getting infected, things
          were uncertain, everyone was scared and all we could do was stay
          indoors. The pandemic had infected all the infrastructure globally and
          the only thing keeping things afloat was IT.
        </p>
        <p>
          Work from home became the new norm. Now, I was working 9am - 9pm to
          meet the sprint deadlines.FML. This continued for a few months and I
          quit. Of Course my parents were furious as it was not a proper time to
          leave a secure job and be unemployed.
        </p>
        <p>
          For the next two months, I spent my time exploring devops techs like
          docker, apache, nginx, openvpn and frontend technologies : reactjs. I
          also built a NEPSE web scraper and ran it in cronjob.
        </p>
        <p>
          I was actively posting in Developer Nepal's community page, and
          someone saw the posts and offered me a job. I was then not looking for
          a new job, still applied and got it (50K). My parents calmed down a
          bit after this.
        </p>
        <p>
          I joined a Portuguese startup company Mobwizards, oversea's dev team
          was chill af, especially my manager Jorge. He loved momos and often
          visited Nepali restaurant near his home in Lisbon. I was the lead
          developer here at Nepal and mentored two other mid-devs, built a
          docker image to support legacy codebase, designed a database and some
          of the most beautiful code I've ever written. Months spent learning
          after leaving previous work really paid off.
        </p>
        <Alert severity="success" icon={false} className="mt-5">
          <AlertTitle>TLDR;</AlertTitle> Move fast and break things continue.
          Changing to a new job helped me bring out the best I had to offer and
          helped peers grow as well. Sense of Independence and confidence grew
          within, able to take new challenges head on heighten.
        </Alert>

        <Grid container spacing={3} className="mt-3">
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ImageModal imgSrc={hike} imgAlt={"hike"} />
              </Grid>
              <Grid item xs={4}>
                <ImageModal imgSrc={pokhara_3} imgAlt={"pokhara_3"} />
              </Grid>
              <Grid item xs={4}>
                <ImageModal imgSrc={office_outing} imgAlt={"office_outing"} />
              </Grid>
              <Grid item xs={4}>
                <ImageModal imgSrc={office_outing2} imgAlt={"office_outing2"} />
              </Grid>
              <Grid item xs={4}>
                <ImageModal imgSrc={poker} imgAlt={"poker"} />
              </Grid>
              <Grid item xs={4}>
                <ImageModal imgSrc={sujan} imgAlt={"sujan"} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={3}>
            <ImageModal imgSrc={pokhara_2} imgAlt={"pokhara_2"} />
          </Grid>
          <Grid item xs={3}>
            <ImageModal imgSrc={covid_2} imgAlt={"pokhara_2"} />
          </Grid>
        </Grid>
      </div>
      <hr />

      <div className="year mb-5">
        <h2>Year 4 (2021)</h2>
        <p>
          Mobwizard's company structure suddenly changed and I had two managers,
          and they didn't get along. It became difficult to work under two of
          them, shit just turned into snakes and ladder. I realized the pattern
          and applied to one place, Wolfmatrix. Had a great in depth technical
          interview and got my offer letter 2 days later (70K).
        </p>
        <p>
          Working at Mobwizard helped me realize the potential within me, not
          only was I growing but helped my peers and associate developers grow
          as well. I had accomplished more than I thought I could have in 6
          months. After a month's notice I left with a warm goodbye to the team.
        </p>
        <p>
          Transitioning to Wolfmatrix team was easy as pie, dev's had mutual
          respect for one another and seniors were open-minded and
          accommodating. New ideas and discussions were welcomed, if an idea
          sounded good and could be executed efficiently it was accepted, a
          startup mindset. There were frequent events happening to keep dev's
          motivated and entertained. In fact, I learned how to play Marriage :
          card game, and also played the first game of Beer pong here.
        </p>
        <p>
          I worked on a Rail replacement management software, we built several
          versions which were put on tender for Australian train companies and
          some got selected. Worked as a full stack developer, sometimes I would
          be working on the UI and brand color scheme, sometimes on the backend
          api stuff or database. Product ownership level was high and self
          exploration was continuous.
        </p>
        <p>
          I also worked on a Microservice. It was an excel importer
          functionality for the software which was written in C#. The switch to
          compile type language was interesting. Later, deployed the
          microservice in AWS's Lambda function.
        </p>
        <p>
          This year, My sister got married and I went to Butwal to attend
          groom's wedding party. I went on a mini vacation to Dhulikhel and
          tried pottery at Bhaktapur.
        </p>
        <p>
          While continuing my main project, I also mentored some freshers who
          were really smart and hardworking. In 3 months time period, they had
          basic concepts of frontend : Reactjs, backend: symfony/nodejs,
          database : Mysql. With some guidance, they were given the task of
          building office management software which is still used at the time of
          writing this journal.
        </p>
        <p>
          Over the months, I would switch to different projects within the
          office and help when there is a developer shortage and learn new
          things on the way. After working on microservices, my interest
          switched to the cloud.
        </p>
        <Alert severity="success" icon={false} className="mt-5">
          <AlertTitle>TLDR;</AlertTitle> See one, do one , now I need to teach
          one. Yep, at this point I was learning the topics that seemed
          interesting to me and shared my knowledge to freshers and associate
          developers.&nbsp;
        </Alert>

        <Grid container spacing={3} className="mt-3">
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ImageModal imgSrc={sherpa} imgAlt={"sherpa"} />
              </Grid>
              <Grid item xs={4}>
                <ImageModal
                  imgSrc={sherpa_farewell}
                  imgAlt={"sherpa_farewell"}
                />
              </Grid>
              <Grid item xs={4}>
                <ImageModal imgSrc={dhulikhel} imgAlt={"dhulikhel"} />
              </Grid>
              <Grid item xs={4}>
                <ImageModal imgSrc={pottery} imgAlt={"pottery"} />
              </Grid>
              <Grid item xs={4}>
                <ImageModal imgSrc={butwal_flight} imgAlt={"butwal_flight"} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={3}>
            <ImageModal imgSrc={sister_wedding} imgAlt={"sister_wedding"} />
          </Grid>

          <Grid item xs={3}>
            <ImageModal imgSrc={beer_pong} imgAlt={"beer_pong"} />
          </Grid>
        </Grid>
      </div>
      <hr />

      <h2>Year 5 (2022 )</h2>
      <p>
        The stock market had been on a bull run since covid and it was the talk
        of the town. I had applied for some IPO and few were luckily allotted.
        Got hooked on the market trend and spent some time learning about
        financial analysis, financial independence and finally started investing
        on the secondary market.
      </p>
      <p>
        Over the next months, I handed over development tasks to fellow
        coworkers and began exploring the devOps roadmap. The current
        infrastructure was starting to fail and appeared as a bottleneck for the
        application,&nbsp; a need for an auto scalable architecture. There was
        Green light to research on the topic and find a solution. After 2-3
        weeks of intense research and lots of hits and trials later, I built
        an&nbsp; Auto Scalable Cloud Architecture based on top of AWS's elastic
        container service which was implemented for 3 projects. One of the
        coolest project worked on.
      </p>
      <p>
        Yearly performance review had come and I was promoted to senior software
        engineer(85k).
      </p>
      <p>
        I would still continue providing support on the microservice. Over the
        months, I implemented bitbucket pipelines to other active projects as
        well. During spare time, would discuss various tech topics with coworker
        @Rojen such as docker, machine learning , AI, Dalle.&nbsp;
      </p>
      <p>
        At the time, the client would send feature proposals and we would
        breakdown the tasks and give them time estimations. This proposal took
        time to be approved resulting in more spare time.
      </p>
      <p>
        I took on a side job for a client, they wanted an offline desktop
        application for their gold shop. The software was built using electron
        js, it took 4 months of development time and a couple more iterations
        for bug fixes and new features. I am more surprised I was able to build
        a software for an environment where there was no previous experience.
      </p>
      <p>
        There was a dengue outbreak and I got infected. It put me to bed for a
        week and during that time, I read some financial books. Continued
        researching more on stocks.Invested 25% of savings into stocks and
        started investing in SIP Mutual funds on a monthly basis.&nbsp;
      </p>
      <p>
        For this year's vacation, I went to Langtang. The weather got
        notoriously bad and the trek was very laborious. Not every day in life
        is rainbow and sunshine.
      </p>
      <p>
        At this point of my life, I had achieved most of the goals set at the
        beginning and more. I would pass on financial knowledge to friends,
        listen to their job issues and give suggestions based on my experience.
        As a man, it is in our biology to protect and provide. Of Course you'd
        want the best for the people you'd care about and sometimes resulting in
        putting them under pressure of walking in your shoes. And this is bad.
        When someone shares their insecurities, just be understanding and kind.
        Every human is equal, the moment one considers themselves superior to
        another, you'd end up with a superiority complex.
      </p>
      <p>
        And so I learned something about being a son/brother/man/leader. You
        can't push people into following you for no reason. You have to be ready
        to listen. Wait for them to come to you. Do that and they'll know they
        can depend on you.
      </p>
      <p>
        Don't waste time wondering if you made mistakes. Life's too short for
        that. Learn from life's lessons and move on with greater wisdom.
      </p>

      <Alert severity="success" icon={false} className="mt-5">
        <AlertTitle>TLDR;</AlertTitle> Self taught myself about financial
        knowledge, started investing. Built an awesome cloud architecture and
        gold management software. Some emotional maturity. Feeling content with
        the achievements, I realized pursuing masters would be the next step.
      </Alert>

      <Grid container spacing={3} className="mt-3">
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <ImageModal imgSrc={yomari} imgAlt={"yomari"} />
            </Grid>
            <Grid item xs={4}>
              <ImageModal imgSrc={wolf_outing} imgAlt={"wolf_outing"} />
            </Grid>
            <Grid item xs={4}>
              <ImageModal imgSrc={pushups} imgAlt={"pushups"} />
            </Grid>
            <Grid item xs={4}>
              <ImageModal imgSrc={langtang} imgAlt={"langtang"} />
            </Grid>
            <Grid item xs={4}>
              <ImageModal imgSrc={wolf_holi} imgAlt={"wolf_holi"} />
            </Grid>
            <Grid item xs={4}>
              <ImageModal imgSrc={kic_meet} imgAlt={"kic_meet"} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <ImageModal imgSrc={wolf_fish} imgAlt={"wolf_fish"} />
        </Grid>
        <Grid item xs={3}>
          <ImageModal imgSrc={pizza} imgAlt={"pizza"} />
        </Grid>
      </Grid>

      <p>Last updated : Sunday, March 12, 2023</p>
    </div>
  );
};

export default FiveYearsAsSWE;
