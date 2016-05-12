---
layout: index
---
### Welcome to the Showcase

At the end of each medium to large student project, we often ask a student or team of students to register their project for our showcase. Some of these were part of regular courses, others were independent studies and others were part of industry partnerships. Click on the links below to see the code, the presentations and the project summary pages for some of our recent projects.

<hr>
<table id="projects" class="display">
    <thead>
        <tr>
            <th width="10%"></th>
            <th width="3%">Best Bet?</th>
            <th width="15%">Name</th>
            <th width="40%">Summary</th>
            <th width="10%">Project Page</th>
            <th width="10%">Github</th>
            <th width="10%">Presentation</th>
            <th width="10%">Course</th>
            <th width="10%">Date</th>
        </tr>
    </thead>
    <tbody>
      {% for post in site.posts %}
        <tr>
            <td> <img src="{{ post.image }}" height="128" width="128"> </td>
            <td> {{ post.bestbet }} </td>
            <td> {{ post.name }} </td>
            <td> {{ post.blurb }} </td>
            <td> <a href="{{ post.portfolio }}">project</a> </td>
            <td> <a href="{{ post.github }}">github</a>  </td>
            <td> <a href="{{ post.presentation }}">prezo</a>  </td>
            <td> {{ post.course }} </td>
            <td> {{ post.semester}} </td>
        </tr>
      {% endfor %}
    </tbody>
</table>
