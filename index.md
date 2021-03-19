---
layout: index
---
## Welcome to the Brandeis University Computer Science Showcase

At the end of each medium to large student project, we often ask a student or team of students to register their project for our showcase. Some of these were part of regular courses, others were independent studies and others were part of industry partnerships.

Click on the links below to see the code, the presentations and the project summary pages for some of our recent projects.

<hr>

<table id="projects" class="display">

  <thead>
    <tr>
      <th><i class="fa fa-picture-o" aria-hidden="true"></i> Logo</th>
      <th><i class="fa fa-star" aria-hidden="true"></i> Name</th>
      <th><i class="fa fa-info-circle" aria-hidden="true"></i> Summary</th>
      <th><i class="fa fa-link" aria-hidden="true"></i> Links</th>
      <th><i class="fa fa-graduation-cap" aria-hidden="true"></i> Course</th>
      <th><i class="fa fa-calendar" aria-hidden="true"></i> Date</th>
    </tr>
  </thead>
  <tbody>
    {% for post in site.posts %}
      {% if post.name %}
      <tr>
        <td> <img src="{{ post.image }}" height="96" width="96"> </td>
        <td> <h4> {{ post.name }} </h4> </td>
        <td> {{ post.blurb }} </td>
        <td>
          {% if post.application %}
          <p><i class="fa fa-lightbulb-o" aria-hidden="true"></i> <a href="{{ post.application }}">Product</a></p>
          {% endif %}
          {% if post.github %}
          <p><i class="fa fa-github" aria-hidden="true"></i> <a href="{{ post.github }}">GitHub</a></p>
          {% endif %}
          {% if post.presentation %}
          <p><i class="fa fa-file-powerpoint-o" aria-hidden="true"></i> <a href="{{ post.presentation }}">Presentation</a></p>
          {% endif %}
        </td>
        <td> {{ post.course }} </td>
        <td> {{ post.semester}} </td>
      </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
