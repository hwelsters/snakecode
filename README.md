<h1 align="center">🐱</h1>
<h1 align="center"> Axolotl </h1>
<h3 align="center"> The loveliest programming website in the world! </h3>
<h5 align="center"> A website to teach users how to program in python </h5>

<h2>🍝 Project description</h2>
Axolotl is a programming website made to teach python with interactive tutorials.
<h4>Features</h4>
<ul>
  <li><b>A built-in code editor</b> - To allow users to work on the exercises. </li>
  <li><b>Quizzes</b> - To test users on various topics.</li>
  <li><b>A multi-page signup form</b> - Um, this is a signup form that's multi-paged. That's about it. It looks really cool tho.</li>
  <li><b>Fully dockerized application, mostly</b> - To allow weird people on the internet to try it out.</li>
</ul>
I'm done with most of the code part. Right now, I'm mostly working on creating content for users.

<br/>

![rainbow](https://user-images.githubusercontent.com/84760072/208384585-03ebeb8d-25ad-4764-8c55-3952c670dce5.png)

<h2>🥞 Tech stack</h2>
<ul>
  <li><b>MySQL</b> - As a database. I could use MongoDB but... I dunno, I just wanted to get better at SQL. I've done a ton of exercises with SQL but I've never really worked on anything significant with it.</li>
  <li><b>Express.JS</b> - As a backend web application framework</li>
  <li><b>React.JS</b> - For the frontend. It's basic but it will do. May or may not migrate to Next.JS sometime in the future </li>
  <li><b>Node.JS</b> - Again, basic but it works.</li>
  <li><b>Docker</b> - Just to containerize everything 📦</li>
  <li><b>Terraform</b> - Because I'm cool like that 😎 but mainly because I'm lazy and AWS' UI is 🤮</li>
</ul>
I would love to go around telling people about the tech stack and just calling it the MERN stack but instead of MongoDB, I used MySQL.

<br/>

![rainbow](https://user-images.githubusercontent.com/84760072/208384585-03ebeb8d-25ad-4764-8c55-3952c670dce5.png)

<h2> 📋 Execution Instructions</h2>
All you really need is Docker and Docker Compose. These tools will do the rest for you.
<ul>
  <li><b>1</b> - Call <code>docker-compose up</code> at the root folder</li>
  <li><b>2</b> - Do ten squats 🦵</li>
  <li><b>3</b> - Do ten push ups 💪</li>
  <li><b>4</b> - Profit 💰</li>
</ul>

<h2> 🔨 Some problems that may have to be ironed out</h2>
<ul>
  <li><b>There might be some problems if MySQL is installed on your PC</b> - If this is the case, you may have to stop MySQL's process before doing docker-compose up</li>
</ul>


![rainbow](https://user-images.githubusercontent.com/84760072/208384585-03ebeb8d-25ad-4764-8c55-3952c670dce5.png)

<h2>🤔 Faq</h2>
<ul>
  <li><b>Why am I making this?</b> - I want to teach people how to program.
  <li><b>Where's the source code?</b> - I'm actually planning on making money with this but I'll be willing to show my code on request.</li>
</ul>Why not? Also, it's cool.

<br/>

![rainbow](https://user-images.githubusercontent.com/84760072/208384585-03ebeb8d-25ad-4764-8c55-3952c670dce5.png)

Also, one thing I'm currently trying to work on is an array visualizer which lets users visualize exactly what python is doing to their variables step by step.
I'm currently planning on doing a very brute force approach. I'll just insert a print function after each statement which prints the contents of a variable and the line number. Then, the user will be able to do step through their code line by line. But identifying statements in python is a bit annoying and I'm still not 100% sure what even constitutes a statement in python.

My friend told me about how it's possible to redirect python's debug info to the console so I might consider that approach as well.
I'm also considering letting people start with premade snippets? As in, they just have to fill in the blank
