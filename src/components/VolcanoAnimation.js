import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const VolcanoAnimation = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        //Ensure the container is empty befor append a new canvas. 
        while (mountRef.current.firstChild) {
            mountRef.current.removeChild(mountRef.current.firstChild);
        }

        const width = mountRef.current.clientWidth;
        const height = 500;

        //Create a WebGLRenderer and set its width and height
        var renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);

        // Add the automatically created canvas element to the page
        mountRef.current.appendChild(renderer.domElement);

        // Create a scene 
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0xFFFFFF);


        // Create a PerspectiveCamera
        var fov = 45;
        var aspect = width / height;
        var nearClippingPlane = 0.1;
        var farClippingPlane = 1000;
        var camera = new THREE.PerspectiveCamera(fov, aspect, nearClippingPlane, farClippingPlane);
        camera.position.set(0, 10, 25);

        // Create an ambient light 
        var ambientLight = new THREE.AmbientLight(0x404040, 2.5); // Increased intensity for visibility
        scene.add(ambientLight);

        // Create a white directional light with an intensity of 1.0
        var directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.set(5, 10, 7.5);
        scene.add(directionalLight);

        // Volcano
        var geometry = new THREE.CylinderGeometry(1, 6, 8, 32);
        var material = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); // Chocolate Brown
        var volcano = new THREE.Mesh(geometry, material);
        scene.add(volcano);

        // Particles -> lava of volcano
        var numberParticles = 500;
        var particles = [];
        var pGeometry = new THREE.SphereGeometry(0.15, 6, 6);
        var pMaterial = new THREE.MeshBasicMaterial({ color: 0xffaa00 });

        for (var i = 0; i < numberParticles; i++) {
            var particle = new THREE.Mesh(pGeometry, pMaterial);
            initParticle(particle);
            scene.add(particle);
            particles.push(particle);
        }

        function initParticle(p) {
            p.position.set(0, 3, 0); // Des del cràter del volcà. 
            p.userData.vx = (Math.random() - 0.5) * 0.15;
            p.userData.vy = Math.random() * 0.2 + 0.1;
            p.userData.vz = (Math.random() - 0.5) * 0.15;
        }

        function animate() {
            requestAnimationFrame(animate);

            particles.forEach(function (p) {
                p.position.x += p.userData.vx;
                p.position.y += p.userData.vy;
                p.position.z += p.userData.vz;

                p.userData.vy -= 0.005; // gravity

                // If the particle falls below the base of the volcano-> restart. 
                if (p.position.y < -2) {
                    initParticle(p);
                }
            });
            camera.lookAt(new THREE.Vector3(0, 2, 0));
            renderer.render(scene, camera);
        }

        animate();


    }, []);

    return <div ref={mountRef} style={{ width: '100%', display: 'block' }} />;
};

export default VolcanoAnimation;
