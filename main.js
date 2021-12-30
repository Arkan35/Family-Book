var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://images.immediate.co.uk/production/volatile/sites/28/2019/02/great-great-grandma-meets-granddaughter_196113-132873d.jpg?quality=90&resize=610%2C406","https://i.postimg.cc/qqyYvVbq/grandpa.jpg","https://thumbs.dreamstime.com/b/grandmother-portrait-cute-old-woman-bag-walking-stick-wearing-glasses-short-grey-hair-senior-lady-walk-grandma-86364329.jpg" ,"https://i.postimg.cc/wjMnFtMX/father.jpg" ,"https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg"];
var names = ["Family Book","Gaitri", "Dr.Vijay Krishna", "Kiran Singh", "Sarwjeet Singh", "Aparna Singh","Arkan Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
