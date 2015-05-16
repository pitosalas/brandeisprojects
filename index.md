---
layout: index
---
### What is this page?

This is a collection of student project "portfolio pages". At the end of each medium to large student project, we often ask a student or team of students to prepare a summary of their work as a Portfolio Page. It is really up to the students to decide exactly how they interpret that. Basically the goal is 'showcase' the work for external consumption.


<table id="projects" class="display">
    <thead>
        <tr>
            <th>Name</th>
            <th>Summary</th>
            <th>Portfolio Page</th>
            <th>Github</th>
            <th>Course</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
      {% for post in site.posts %}
        <tr>
            <td> {{ post.name }} </th>
            <td> {{ post.blurb }} </td>
            <td> <a href="{{ post.porfolio }}">portfolio</a>
            <td> <a href="{{ post.github }}">github</a>
            <td> {{ post.course }} </td>
            <td> {{ post.semester}} </td>
        </tr>
      {% endfor %}
    </tbody>
</table>


<table id="projects" class="display">
    <thead>
        <tr>
            <th>Name</th>
            <th>Summary</th>
            <th>Portfolio Page</th>
            <th>Course</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Surveyor</th>
            <td>Surveyor is the best way to conduct Market Research on Millennials</th>
            <td>Portfolio Page</td>
            <td>CS166b</td>
            <td>Spring 2015</td>
        </tr>
        <tr>
            <td>MarginCall</th>
            <td>Keep your investments in check, with market alerts from MarginCall</th>
            <td>Portfolio Page</td>
            <td>CS166b</td>
            <td>Spring 2015</td>
        </tr>
        <tr>
            <td>BarterMe</th>
            <td>One man's trash is another man's treasure.  BarterMe:  Person to person trading made simple</th>
            <td>Portfolio Page</td>
            <td>CS166b</td>
            <td>Spring 2015</td>
        </tr>
        <tr>
            <td>Epsilon</th>
            <td>Finally automate the collection of DJ playlists and reporting for </th>
            <td>Portfolio Page</td>
            <td>CS166b</td>
            <td>Spring 2015</td>
        </tr>
        <tr>
            <td>Carpe Diem</th>
            <td>Ad-hoc activities, spotting events of interest happening in your community! "Ever wondered where to get free food in Brandeis campus right now?"</th>
            <td>Portfolio Page</td>
            <td>CS166b</td>
            <td>Spring 2015</td>
        </tr>
        <tr>
            <td>Campus GPS</th>
            <td>Visitors avoid getting lost when trying to find Feldberg 131 or Gzag 124</th>
            <td>Portfolio Page</td>
            <td>CS166b</td>
            <td>Spring 2015</td>
        </tr>
        <tr>
            <td>Market Watch</th>
            <td>What’s happening in the financial markets?</th>
            <td>Portfolio Page</td>
            <td>CS166b</td>
            <td>Spring 2015</td>
        </tr>
    </tbody>
</table>