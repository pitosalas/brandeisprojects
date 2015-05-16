---
layout: index
---
### What is this page?

This is a collection of student project "portfolio pages". At the end of each medium to large student project, we often ask a student or team of students to prepare a summary of their work as a Portfolio Page. It is really up to the students to decide exactly how they interpret that. Basically the goal is 'showcase' the work for external consumption.


<table id="projecxts" class="display">
    <thead>
        <tr>
            <th>Name</th>
            <th>Summary</th>
            <th>Portfolio Page</th>
            <th>Github</th>
            <th>Presentation<th>
            <th>Course</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
      {% for post in site.posts %}
        <tr>
            <td> {{ post.name }} </th>
            <td> {{ post.blurb }} </td>
            <td> <a href="{{ post.portfolio }}">portfolio</a>
            <td> <a href="{{ post.github }}">github</a>
            <td> <a href="{{ post.presentation }}">prezo</a>
            <td> {{ post.course }} </td>
            <td> {{ post.semester}} </td>
        </tr>portfolio
      {% endfor %}
    </tbody>
</table>
