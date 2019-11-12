$().ready(function(){
  $('#button-create-item').on('click', function(){
    let name = $('#input-create-item').val();
    $('#input-create-item').val('');
    let html = '';

    html += '<div class="item">';
    html += '<div class="name">' + name + '</div>';
    html += '<img src="assets/diani-beach-safari.jpg" alt="It is the deal">';
    html += '<div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit nobis repellat modi quibusdam, illum expedita voluptate! Sapiente, unde hic enim, expedita doloremque similique numquam at iure optio libero sit!</div>';
    html += '<div class="price">499</div>';
    html += '<button class="item-add">Add to Cart</button>';
    html += '<button class="item-remove">Remove</button>';
    html += '<br>';
    html += '<a href="">More Info</a>';
    html += '<div class="more-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam, iure libero blanditiis architecto repellendus, vero, perspiciatis aspernatur eius eos omnis cum obcaecati mollitia nemo quam neque porro debitis molestiae.</div>';
    html += '</div>';
    $('#container').append(html);
  
  });

  $('#container').on('click','.more-info-link', function(e){
    e.preventDefault();
    $(this).parent().find('.more-info').toggle();
  })
  $('#container').on('click','.item-remove', function(){
    $(this).parent().remove();
  })
})