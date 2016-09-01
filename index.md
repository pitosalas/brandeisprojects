---
layout: index
---
### Welcome to the Brandeis University Computer Science Showcase

<p>At the end of each medium to large student project, we often ask a student or team of students to register their project for our showcase. Some of these were part of regular courses, others were independent studies and others were part of industry partnerships.</p>
<p>Click on the links below to see the code, the presentations and the project summary pages for some of our recent projects!</p>

<hr>
before table tab
<table id="projects" class="display">
after table tab
    <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Summary</th>
            <th>Links</th>
            <th>Course</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
      {% for post in site.posts %}
        <tr>
            <td> <img src="{{ post.image }}" height="96" width="96"> </td>
            <td> <h4> {{ post.name }} </h2> </td>
            <td> {{ post.blurb }} </td>
            <td>
              <ul>
                <li> <a href="{{ post.portfolio }}">summary page</a></li>
                <li> <a href="{{ post.application }}">product</a></li>
                <li> <a href="{{ post.github }}">github</a></li>
                <li> <a href="{{ post.presentation }}">presentation</a></li>
              </ul>
            </td>
            <td> {{ post.course }} </td>
            <td> {{ post.semester}} </td>
        </tr>
      {% endfor %}
    </tbody>
</table>
