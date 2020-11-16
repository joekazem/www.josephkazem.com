function switchtab(tab) {
   var informationcontainer = document.getElementById("tabinformationcontainer");
   var tabinformation = document.getElementById("tabinformation");
   switch (tab) {
      case "about":
         informationcontainer.className = "";
         informationcontainer.classList.add("container", "about");
         tabinformation.innerHTML = `
<h4>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Sed libero enim sed faucibus turpis in eu mi bibendum. Elit duis tristique sollicitudin nibh sit. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Sem integer vitae justo eget magna fermentum. Commodo quis imperdiet massa tincidunt nunc pulvinar. Et pharetra pharetra massa massa ultricies mi. Et ultrices neque ornare aenean euismod. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Congue quisque egestas diam in arcu cursus. Vitae sapien pellentesque habitant morbi tristique senectus. Magna etiam tempor orci eu lobortis elementum. Tortor at risus viverra adipiscing at in tellus. Volutpat sed cras ornare arcu dui vivamus.

Maecenas pharetra convallis posuere morbi leo urna molestie at. Non quam lacus suspendisse faucibus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nisi vitae suscipit tellus mauris a diam maecenas. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Convallis convallis tellus id interdum velit laoreet. Et netus et malesuada fames ac turpis egestas sed tempus. Elit at imperdiet dui accumsan sit amet nulla. Duis tristique sollicitudin nibh sit amet commodo nulla. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.

Est ante intristique senectus. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Risus in hendrerit gravida rutrum quisque. Amet purus gravida quis blandit. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Malesuada fames ac turpis egestas. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Malesuada fames ac turpis egestas integer eget. Aliquet enim tortor at auctor urna nunc. Mi ipsum faucibus vitae aliquet nec ullamcorper sit.

Eget ma habitant. Ultrices dui sapien eget mi proin. Risus ultricies tristique nulla aliquet enim tortor at. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Morbi leo urna molestie at. Nibh cras pulvinar mattis nunc sed blandit libero. Amet dictum sit amet justo donec enim diam. Nam libero justo laoreet sit amet cursus sit amet. Lacus laoreet non curabitur gravida. Amet risus nullam eget felis eget nunc lobortis. Consequat mauris nunc congue nisi vitae. Id velit ut tortor pretium viverra suspendisse potenti. Diam maecenas sed enim ut sem viverra aliquet.

.</h4>
`
         break
      case "photo":
         informationcontainer.className = "";
         informationcontainer.classList.add("container", "photo");
         tabinformation.innerHTML = `<h4>photo goes here</h4> `
         break
      case "portfolio":
         informationcontainer.className = "";
         informationcontainer.classList.add("container", "portfolio");
         tabinformation.innerHTML = `<h4>Portfolio info goes here</h4>`
         break
      case "resume":
         informationcontainer.className = "";
         informationcontainer.classList.add("container", "resume");
         tabinformation.innerHTML = `<h4>Resume goes here</h4>`
         break
      case "contact":
         informationcontainer.className = "";
         informationcontainer.classList.add("container", "contact");
         tabinformation.innerHTML = `<h4>contact info goes here</h4>`
         break
      case "github":
         informationcontainer.className = "";
         informationcontainer.classList.add("container", "github");
         tabinformation.innerHTML = `<h4>Github info goes here</h4>`
         break
   }

}