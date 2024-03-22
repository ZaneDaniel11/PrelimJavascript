
$(document).ready(function() {
    // Add Product Form Submission
    $('#productForm').submit(function(e) {
        e.preventDefault();
        var productName = $('#productName').val();
        var productCategory = $('#productCategory').val();
        var productQuantity = $('#productQuantity').val();
        var productImage = $('#productImage').prop('files')[0];
        addProductCard(productName, productCategory, productQuantity, productImage);
        $('#addProductModal').modal('hide'); // Hide the modal after submission
        this.reset(); // Reset the form
    });

    // Delete Product
    $(document).on('click', '.btn-delete', function() {
        $(this).closest('.card').remove();
    });

    // Edit Product (You can implement this functionality if needed)
    $(document).on('click', '.btn-edit', function() {
        
    });
});

// Function to add a new product card
function addProductCard(productName, productCategory, productQuantity, productImage) {
    var reader = new FileReader();
    reader.onload = function(event) {
        var imgSrc = event.target.result;
        // Clone the template
        var template = $('#productCardTemplate').contents().clone();
        // Fill in the details
        template.find('.card-img-top').attr('src', imgSrc);
        template.find('.card-title').text(productName);
        template.find('.category').text(productCategory);
        template.find('.quantity').text(productQuantity);
        // Append the card to the container
        $('#productContainer').append(template);
    };
    reader.readAsDataURL(productImage);
}