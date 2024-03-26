import React from "react";

export default function viewMoreBtn({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="bg-grayColor px-24 py-2 flex items-center gap-1 rounded-full">
			{children}
		</div>
	);
}