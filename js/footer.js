const footer = document.querySelector("footer");

let footerContent = 
`<div class="container text-center text-md-left">
<div class="row text-center text-md-left">

  <!-- Column: About Nike -->
  <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
    <h5 class="text-uppercase mb-4 font-weight-bold">Nike</h5>
    <p>Nike is a global brand dedicated to inspiring every athlete in the world. Our mission is to bring innovation and inspiration to every sports enthusiast.</p>
  </div>

  <!-- Column: Useful Links -->
  <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
    <h5 class="text-uppercase mb-4 font-weight-bold">Useful Links</h5>
    <p><a href="#" class="text-white" style="text-decoration: none;">Shop</a></p>
    <p><a href="#" class="text-white" style="text-decoration: none;">About Us</a></p>
    <p><a href="#" class="text-white" style="text-decoration: none;">Careers</a></p>
    <p><a href="#" class="text-white" style="text-decoration: none;">Contact</a></p>
  </div>

  <!-- Column: Social Media -->
  <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
    <h5 class="text-uppercase mb-4 font-weight-bold">Follow Us</h5>
    <p>
      <a href="https://www.facebook.com/nike" class="text-white" style="text-decoration: none;">
        <i class="fab fa-facebook-f"></i> Facebook
      </a>
    </p>
    <p>
      <a href="https://x.com/Nike" class="text-white" style="text-decoration: none;">
        <i class="fab fa-twitter"></i> Twitter
      </a>
    </p>
    <p>
      <a href="https://www.instagram.com/nike" class="text-white" style="text-decoration: none;">
        <i class="fab fa-instagram"></i> Instagram
      </a>
    </p>
    <p>
      <a href="https://www.linkedin.com/company/nike" class="text-white" style="text-decoration: none;">
        <i class="fab fa-linkedin"></i> LinkedIn
      </a>
    </p>
  </div>

  <!-- Column: Contact -->
  <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
    <h5 class="text-uppercase mb-4 font-weight-bold">Contact</h5>
    <p><i class="fas fa-home mr-3"></i> One Bowerman Dr, Beaverton, OR 97005, USA</p>
    <p><i class="fas fa-envelope mr-3"></i> support@nike.com</p>
    <p><i class="fas fa-phone mr-3"></i> +1 800 344 6453</p>
  </div>

</div>

<hr class="mb-4">

<!-- Footer Bottom -->
<div class="row align-items-center">
  <div class="col-md-7 col-lg-8">
    <p>&copy; 2024 All rights reserved:
      <a href="https://nike.com" style="text-decoration: none;">
        <strong class="text-white"> Nike.com</strong>
      </a>
    </p>
  </div>

  <div class="col-md-5 col-lg-4">
    <div class="text-center text-md-right">
      <ul class="list-unstyled list-inline">
        <li class="list-inline-item">
          <a href="https://www.facebook.com/nike" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-facebook"></i></a>
        </li>
        <li class="list-inline-item">
          <a href="https://x.com/Nike" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-twitter"></i></a>
        </li>
        <li class="list-inline-item">
          <a href="https://www.instagram.com/nike" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-instagram"></i></a>
        </li>
        <li class="list-inline-item">
          <a href="https://www.linkedin.com/company/nike" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-linkedin"></i></a>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>`;

footer.innerHTML = footerContent;