---
layout: index
---
### Welcome to the Showcase

At the end of each medium to large student project, we often ask a student or team of students to register their project for our showcase. Some of these were part of regular courses, others were independent studies and others were part of industry partnerships. Click on the links below to see the code, the presentations and the project summary pages for some of our recent projects.

<hr>
<table id="projects" class="display">
    <thead>
        <tr>
            <th>Name</th>
            <th>Summary</th>
            <th>Project Page</th>
            <th>Github</th>
            <th>Presentation</th>
            <th>Course</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
      {% for post in site.posts %}
        <tr>
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
