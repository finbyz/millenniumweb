erpnext.ProductGrid = class {
	/* Options:
		- items: Items
		- settings: E Commerce Settings
		- products_section: Products Wrapper
		- preference: If preference is not grid view, render but hide
	*/
	constructor(options) {
		Object.assign(this, options);

		if (this.preference !== "Grid View") {
			this.products_section.addClass("hidden");
		}

		this.products_section.empty();
		this.make();
	}

	make() {
		let me = this;
		let html = ``;

		this.items.forEach(item => {
			let title = item.web_item_name || item.item_name || item.item_code || "";
			title =  title.length > 90 ? title.substr(0, 90) + "..." : title;

			html += `<div class="col-lg-4 col-md-6 col-sm-12 item-card p-3"><div class="card text-left card-wrapper mx-auto ">`;
			html += me.get_image_html(item, title);
			html += me.get_card_body_html(item, title, me.settings);
			html += `</div></div>`;
		});

		let $product_wrapper = this.products_section;
		$product_wrapper.append(html);
	}

	get_image_html(item, title) {
		let image = item.website_image || item.image;

		if (image) {
			return `
				<div class="card-img-container product-img has-animation has-animation-y animation-ttb scroll animate-in">
					<a href="/${ item.route || '#' }" style="text-decoration: none;">
						<img class="card-img" src="${ image }" alt="${ title }">
					</a>
				</div>
			`;
		} else {
			return `
				<div class="card-img-container product-img has-animation has-animation-y animation-ttb scroll animate-in">
					<a href="/${ item.route || '#' }" style="text-decoration: none;">
						<div class="card-img-top no-image">
							${ frappe.get_abbr(title) }
						</div>
					</a>
				</div>
			`;
		}
	}
	

	get_card_body_html(item, title, settings) {
		let body_html = `
			<div class="card-body text-left card-body-flex justify-content-between" style="width:100%">
				<div>
		`;
		body_html += this.get_title(item, title);

		// get floating elements
		if (!item.has_variants) {
			if (settings.enable_wishlist) {
				body_html += this.get_wishlist_icon(item);
			}
			if (settings.enabled) {
				body_html += this.get_cart_indicator(item);
			}

		}

		body_html += `</div>`;

		if (item.formatted_price) {
			body_html += this.get_price_html(item);
		}

		body_html += this.get_stock_availability(item, settings);
		body_html += this.get_primary_button(item, settings)
		body_html += `</div>`; // close div on line 49

		return body_html;
	};

	get_title(item, title) {
		let title_html = `
			<a href="/${ item.route || '#' }">
				<h5 class="darkblue-text">
					${ title || '' }
				</h5>				
			</a>			
		`;		
		return title_html;
		
	}

	get_wishlist_icon(item) {
		let icon_class = item.wished ? "wished" : "not-wished";
		return `
			<div class="like-action ${ item.wished ? "like-action-wished" : ''}"
				data-item-code="${ item.item_code }">
				<svg class="icon sm">
					<use class="${ icon_class } wish-icon" href="#icon-heart"></use>
				</svg>
			</div>
		`;
	}

	get_cart_indicator(item) {
		return `
			<div class="cart-indicator ${item.in_cart ? '' : 'hidden'}" data-item-code="${ item.item_code }">
				1
			</div>
		`;
	}

	get_price_html(item) {
		let price_html = `
			<div class="product-price">
				${ item.formatted_price || '' }
		`;

		if (item.formatted_mrp) {
			price_html += `
				<small class="striked-price">
					<s>${ item.formatted_mrp ? item.formatted_mrp.replace(/ +/g, "") : "" }</s>
				</small>
				<small class="ml-1 product-info-green">
					${ item.discount } OFF
				</small>
			`;
		}
		price_html += `</div>`;
		return price_html;
	}

	get_stock_availability(item, settings) {
		if (settings.show_stock_availability && !item.has_variants) {
			if (item.on_backorder) {
				return `
					<span class="out-of-stock mb-2 mt-1" style="color: var(--primary-color)">
						${ __("Available on backorder") }
					</span>
				`;
			} else if (!item.in_stock) {
				return `
					<span class="out-of-stock mb-2 mt-1">
						${ __("Out of stock") }
					</span>
				`;
			}
		}

		return ``;
	}

	get_primary_button(item, settings) {
		if (item.has_variants) {
			return `
				<a href="/${ item.route || '#' }">
					<div class="btn btn-sm btn-explore-variants w-100 mt-4">
						${ __('Explore') }
					</div>
				</a>
			`;
		}
		else{
			return `
			<a id="${ item.name }" data-item-code="${ item.item_code }" class="tile-button card-button fill ml-0 mt-4 pt-4" href="/${ item.route || '#' }">
				<span class="tile-point-parent"><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span><span class="tile-point"></span></span>
				<h6 class="label text-capitalize">View More</h6>
			</a>
			`;
		}
	
	}
};